import { IStudentRepo } from '@/core/domain/repos/student.repo';
import { SeedStudent, SeedStudentsFile } from '../../schemas/students-file.schema';
import { Student } from '@/core/domain/entities/student.entity';
import { StudentsImportReport, emptyReport } from './student-import.report';

export type StudentImportResult = {
  student: Student;
  result: 'created' | 'existing';
};

export class StudentsImporter {
  private studentRepo: IStudentRepo;

  constructor(studentRepo: IStudentRepo) {
    this.studentRepo = studentRepo;
  }

  async importStudents(seedFile: SeedStudentsFile): Promise<StudentsImportReport> {
    const { students } = seedFile;
    const report = emptyReport();
    for (const seedStudent of students) {
      const { result } = await this._importStudent(seedStudent);
      if (result === 'existing') report.studentsExisting++;
      if (result === 'created') report.studentsCreated++;
    }
    return report;
  }

  private async _importStudent(student: SeedStudent): Promise<StudentImportResult> {
    const dbStudent = await this.studentRepo.findByCollegeId(student.collegeId);

    if (dbStudent) {
      return {
        student: dbStudent,
        result: 'existing',
      };
    }

    const domainStudent = Student.create({
      collegeId: student.collegeId,
      fatherName: student.fatherName,
      name: student.name,
      userId: null,
    });

    const created = await this.studentRepo.save(domainStudent);

    return {
      student: created,
      result: 'created',
    };
  }
}
