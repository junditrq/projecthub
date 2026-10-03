import prisma from '../../orm/prisma/prisma.client';
import { DATA_PATH } from '../../seeding/academic/data-path';
import { GroupsImporter } from '../../seeding/academic/importers/groups/groups.importer';
import { StudentsImporter } from '../../seeding/academic/importers/students/students.importer';
import { FileRepo } from '../../seeding/academic/repos/file.repo';
import { FileValidator } from '../../seeding/academic/validators/file.validator';
import container from '../container';
import { createAppModule } from '../registry';

export const createAcademicModule = () => {
  const academicModule = createAppModule();

  academicModule.bind('AcademicDataPath').toValue(DATA_PATH);

  academicModule.bind('IFileRepo').toClass(FileRepo, ['AcademicDataPath']);
  academicModule
    .bind('IFileValidator')
    .toClass(FileValidator, ['AcademicDataPath', 'ISubjectRepo']);

  academicModule.bind('StudentsImporter').toClass(StudentsImporter, ['IStudentRepo']);

  academicModule.bind('GroupsImporter').toFactory(() => {
    return new GroupsImporter(prisma, container.get('ISubjectRepo'));
  });

  return academicModule;
};
