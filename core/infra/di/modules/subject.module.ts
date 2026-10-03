import { PrismaSubjectRepo } from '../../repos/prisma/subject.repo';
import { createAppModule } from '../registry';

export const createSubjectModule = () => {
  const subjectModule = createAppModule();

  subjectModule.bind('ISubjectRepo').toClass(PrismaSubjectRepo);

  return subjectModule;
};
