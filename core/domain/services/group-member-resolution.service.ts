import { UnresolvedMember, UnresolvedMemberType } from '../entities/unresolved-member.entity';
import { BusinessRuleError } from '../errors/domain-errors';
import { IGroupRepo } from '../repos/group.repo';
import { IStudentRepo } from '../repos/student.repo';
import { getCanonicalFullName } from '../utils/get-canonical-full-name.util';
import { normalizeArabicName } from '../utils/normalize-arabic-name.util';

export type StudentCandidate =
  | { kind: 'resolved'; studentId: string }
  | { kind: 'unresolved'; unresolvedMember: UnresolvedMember };

export class GroupMemberResolutionService {
  constructor(
    private readonly _studentRepo: IStudentRepo,
    private readonly _groupRepo: IGroupRepo
  ) {}

  public async assertNotGrouped(opts: {
    studentId: string;
    subjectId: string;
    academicYear: string;

    studentName: string;
    subjectName: string;
  }) {
    const { studentId, subjectId, academicYear, studentName, subjectName } = opts;
    const isGrouped = await this._groupRepo.isStudentGrouped(studentId, subjectId, academicYear);

    if (isGrouped) {
      throw new BusinessRuleError(
        `Student "${studentName}" is already grouped for "${subjectName}" (${academicYear})`
      );
    }
  }

  public async getStudentCandidates(name: string): Promise<StudentCandidate[]> {
    if (!name || name.trim().length === 0) {
      throw new BusinessRuleError('Cannot resolve an empty student name');
    }

    const normalizedName = normalizeArabicName(name);
    const canonicalName = getCanonicalFullName(name, '');

    const students = await this._studentRepo.findCandidatesByName(normalizedName, canonicalName);

    if (students.length === 0) {
      return [
        {
          kind: 'unresolved',
          unresolvedMember: UnresolvedMember.create({
            conflictName: normalizedName,
            studentId: null,
            type: UnresolvedMemberType.STUDENT_NOT_FOUND,
          }),
        },
      ];
    }

    if (students.length > 1) {
      return students.map((student) => ({
        kind: 'unresolved',
        unresolvedMember: UnresolvedMember.create({
          conflictName: normalizedName,
          studentId: student.id,
          type: UnresolvedMemberType.NAME_CONFLICT,
        }),
      }));
    }

    return [
      {
        kind: 'resolved',
        studentId: students[0].id,
      },
    ];
  }
}
