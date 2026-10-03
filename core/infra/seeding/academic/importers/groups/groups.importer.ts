import { Group } from '@/core/domain/entities/group.entity';
import {
  UnresolvedMember,
  UnresolvedMemberType,
} from '@/core/domain/entities/unresolved-member.entity';
import { ISubjectRepo } from '@/core/domain/repos/subject.repo';
import { GroupMemberResolutionService } from '@/core/domain/services/group-member-resolution.service';
import prisma from '@/core/infra/orm/prisma/prisma.client';
import { PrismaClient } from '@/core/infra/orm/prisma/generated';
import { PrismaGroupRepo } from '@/core/infra/repos/prisma/group.repo';
import { PrismaStudentRepo } from '@/core/infra/repos/prisma/student.repo';
import { PrismaSubjectRepo } from '@/core/infra/repos/prisma/subject.repo';
import { SeedGroupsFile } from '../../schemas/groups-file.schema';
import { hashGroup } from '../../../utils/hash-group';
import { emptyReport, GroupsImportReport } from './groups-import.report';
import { ensureProjectIdea } from '../project-idea.importer';

export class GroupsImporter {
  constructor(
    private readonly _prisma: PrismaClient = prisma,
    private readonly _subjectRepo: ISubjectRepo = new PrismaSubjectRepo()
  ) {}

  async importGroups(seedFile: SeedGroupsFile): Promise<GroupsImportReport> {
    const report = emptyReport();

    const subject = await this._subjectRepo.findBySlug(seedFile.subjectSlug);
    if (!subject) {
      throw new Error(`Subject with slug ${seedFile.subjectSlug} doesn't exist in the database.`);
    }

    const specialization = seedFile.specialization;
    if (!subject.allowsSpecialization(specialization)) {
      throw new Error(
        `Specialization "${seedFile.specialization}" is not allowed for subject "${seedFile.subjectSlug}".`
      );
    }

    await this._prisma.$transaction(async (tx) => {
      const groupRepo = new PrismaGroupRepo(tx);
      const studentRepo = new PrismaStudentRepo(tx);
      const resolution = new GroupMemberResolutionService(studentRepo, groupRepo);

      const academicYear = await ensureAcademicYear(tx, seedFile.academicYear);

      for (const seedGroup of seedFile.groups) {
        const seedHash = hashGroup(
          { students: seedGroup.students },
          {
            academicYear: seedFile.academicYear,
            yearLevel: subject.yearLevel,
            specialization: seedFile.specialization,
            subjectSlug: seedFile.subjectSlug,
          }
        );

        if (await groupRepo.existsBySeedHash(seedHash)) {
          report.groupsSkipped += 1;
          report.skippedGroups.push({
            students: seedGroup.students,
            projectIdea: seedGroup.projectIdea,
          });
          continue;
        }

        const memberIds: string[] = [];
        const unresolvedMembers: UnresolvedMember[] = [];

        for (const studentName of seedGroup.students) {
          const candidates = await resolution.getStudentCandidates(studentName);

          for (const candidate of candidates) {
            if (candidate.kind === 'resolved') {
              await resolution.assertNotGrouped({
                studentId: candidate.studentId,
                subjectId: subject.id,
                academicYearId: academicYear.id,
                studentName,
                subjectName: subject.name,
                academicYearLabel: academicYear.label,
              });
              memberIds.push(candidate.studentId);
              report.membersResolved += 1;
            } else {
              unresolvedMembers.push(candidate.unresolvedMember);
              if (candidate.unresolvedMember.type === UnresolvedMemberType.STUDENT_NOT_FOUND) {
                report.membersNotFound += 1;
              } else {
                report.membersConflict += 1;
              }
            }
          }
        }

        const projectIdea = await ensureProjectIdea(seedGroup.projectIdea, tx);

        const group = Group.create({
          projectIdeaId: projectIdea.id,
          academicYearId: academicYear.id,
          subjectId: subject.id,
          specialization,
          memberIds,
          unresolvedMembers,
        });

        await groupRepo.save(group, { seedHash });
        report.groupsSeeded += 1;
      }
    });

    return report;
  }
}
