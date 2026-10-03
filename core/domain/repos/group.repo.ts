import { Group } from '../entities/group.entity';

export interface GroupSaveContext {
  seedHash: string | null;
}

export interface IGroupRepo {
  existsBySeedHash(seedHash: string): Promise<boolean>;
  isStudentGrouped(studentId: string, subjectId: string, academicYear: string): Promise<boolean>;
  save(group: Group, context: GroupSaveContext): Promise<Group>;
}
