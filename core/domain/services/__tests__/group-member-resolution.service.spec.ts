import { describe, it, expect } from 'vitest';
import { Student } from '../../entities/student.entity';
import { UnresolvedMemberType } from '../../entities/unresolved-member.entity';
import { BusinessRuleError } from '../../errors/domain-errors';
import { IGroupRepo } from '../../repos/group.repo';
import { IStudentRepo } from '../../repos/student.repo';
import { GroupMemberResolutionService, StudentCandidate } from '../group-member-resolution.service';

const student = (id: string, name = 'احمد', fatherName = 'محمد'): Student =>
  Student.create({ name, fatherName, collegeId: `college-${id}`, userId: null });

const fakeStudentRepo = (candidates: Student[]): IStudentRepo => ({
  findByCollegeId: async () => null,
  findCandidatesByName: async () => candidates,
  save: async (s) => s,
});

const fakeGroupRepo = (grouped: boolean): IGroupRepo => ({
  existsBySeedHash: async () => false,
  isStudentGrouped: async () => grouped,
  save: async (g) => g,
});

const service = (candidates: Student[], grouped = false): GroupMemberResolutionService =>
  new GroupMemberResolutionService(fakeStudentRepo(candidates), fakeGroupRepo(grouped));

const unresolvedOf = (results: StudentCandidate[]) =>
  results.filter((r) => r.kind === 'unresolved');

describe('GroupMemberResolutionService', () => {
  it('returns a single not-found member with the normalized name when nobody matches', async () => {
    const results = await service([]).getStudentCandidates('أَحْمَد مُحَمَّد');

    expect(unresolvedOf(results)).toHaveLength(1);
    const [only] = unresolvedOf(results);
    if (only.kind !== 'unresolved') throw new Error('expected unresolved candidate');
    expect(only.unresolvedMember.type).toBe(UnresolvedMemberType.STUDENT_NOT_FOUND);
    expect(only.unresolvedMember.studentId).toBeNull();
    expect(only.unresolvedMember.conflictName).toBe('احمد محمد');
  });

  it('returns a resolved candidate holding only the student id on a unique match', async () => {
    const match = student('s-1');
    const results = await service([match]).getStudentCandidates('احمد');

    expect(results).toEqual([{ kind: 'resolved', studentId: match.id }]);
  });

  it('returns one conflict member per candidate on ambiguous matches', async () => {
    const results = await service([student('s-1'), student('s-2')]).getStudentCandidates('احمد');

    const unresolved = unresolvedOf(results);
    expect(unresolved).toHaveLength(2);
    for (const candidate of unresolved) {
      if (candidate.kind !== 'unresolved') throw new Error('expected unresolved candidate');
      expect(candidate.unresolvedMember.type).toBe(UnresolvedMemberType.NAME_CONFLICT);
      expect(candidate.unresolvedMember.studentId).not.toBeNull();
    }
    const ids = unresolved.map((c) =>
      c.kind === 'unresolved' ? c.unresolvedMember.studentId : null
    );
    expect(new Set(ids).size).toBe(2);
  });

  it('rejects empty names instead of querying with empty keys', async () => {
    await expect(service([]).getStudentCandidates('   ')).rejects.toThrow(BusinessRuleError);
  });

  it('stays silent when the student is not grouped elsewhere', async () => {
    await expect(
      service([student('s-1')], false).assertNotGrouped({
        studentId: 's-1',
        subjectId: 'subject-1',
        academicYearId: 'year-1',
        studentName: 'احمد محمد',
        subjectName: 'Project 2',
        academicYearLabel: '2025-2026',
      })
    ).resolves.toBeUndefined();
  });

  it('throws a human-readable error naming people, not uuids, when grouped', async () => {
    const failure = service([student('s-1')], true).assertNotGrouped({
      studentId: 's-1',
      subjectId: 'subject-1',
      academicYearId: 'year-1',
      studentName: 'احمد محمد',
      subjectName: 'Project 2',
      academicYearLabel: '2025-2026',
    });

    await expect(failure).rejects.toThrow(BusinessRuleError);
    await expect(failure).rejects.toThrow(
      'Student "احمد محمد" is already grouped for "Project 2" (2025-2026)'
    );
  });
});
