import { describe, it, expect } from 'vitest';
import { Student } from '../../entities/student.entity';
import { BusinessRuleError } from '../../errors/domain-errors';
import { IGroupRepo } from '../../repos/group.repo';
import { IStudentRepo } from '../../repos/student.repo';
import { GroupMemberResolutionService, StudentCandidate } from '../group-member-resolution.service';

const collegeIds: Record<string, string> = {
  's-1': '1723240193',
  's-2': '1720074514',
};

const student = (id: string, name: string, fatherName: string): Student =>
  Student.create({ name, fatherName, collegeId: collegeIds[id] ?? '1722168510', userId: null });

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
  it('returns a single not-found member with the normalized full name when nobody matches', async () => {
    const results = await service([]).getStudentCandidates('غائب تماما الحاضر');

    expect(unresolvedOf(results)).toHaveLength(1);
    const [only] = unresolvedOf(results);
    if (only.kind !== 'unresolved') throw new Error('expected unresolved candidate');
    expect(only.unresolvedMember.type).toBe('StudentNotFound');
    expect(only.unresolvedMember.studentId).toBeNull();
    expect(only.unresolvedMember.conflictName).toBe('غائب تماما الحاضر');
  });

  it('resolves a multi-token seed against stored first and father names', async () => {
    const match = student('s-1', 'احمد تللو', 'خالد');
    const results = await service([match]).getStudentCandidates('احمد خالد تللو');

    expect(results).toEqual([{ kind: 'resolved', studentId: match.id }]);
  });

  it('returns one conflict row per candidate on ambiguous matches', async () => {
    const canonicalMatch = student('s-1', 'احمد تللو', 'خالد');
    const normalizedMatch = student('s-2', 'احمد خالد تللو', 'عباس');
    const results = await service([canonicalMatch, normalizedMatch]).getStudentCandidates(
      'احمد خالد تللو'
    );

    const unresolved = unresolvedOf(results);
    expect(unresolved).toHaveLength(2);
    const ids = new Set(
      unresolved.map((c) => (c.kind === 'unresolved' ? c.unresolvedMember.studentId : null))
    );
    expect(ids).toEqual(new Set([canonicalMatch.id, normalizedMatch.id]));
  });

  it('rejects empty names instead of querying with empty keys', async () => {
    await expect(service([]).getStudentCandidates('   ')).rejects.toThrow(BusinessRuleError);
  });

  it('stays silent when the student is not grouped elsewhere', async () => {
    await expect(
      service([student('s-1', 'احمد تللو', 'خالد')], false).assertNotGrouped({
        studentId: 's-1',
        subjectId: 'subject-1',
        academicYearId: 'year-1',
        studentName: 'احمد خالد تللو',
        subjectName: 'Project 2',
        academicYearLabel: '2025-2026',
      })
    ).resolves.toBeUndefined();
  });

  it('throws a human-readable error naming people, not uuids, when grouped', async () => {
    const failure = service([student('s-1', 'احمد تللو', 'خالد')], true).assertNotGrouped({
      studentId: 's-1',
      subjectId: 'subject-1',
      academicYearId: 'year-1',
      studentName: 'احمد خالد تللو',
      subjectName: 'Project 2',
      academicYearLabel: '2025-2026',
    });

    await expect(failure).rejects.toThrow(BusinessRuleError);
    await expect(failure).rejects.toThrow(
      'Student "احمد خالد تللو" is already grouped for "Project 2" (2025-2026)'
    );
  });
});
