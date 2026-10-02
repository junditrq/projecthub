import { createAppContainer } from '@/core/infra/di/registry';
import { createCategoryModule } from './modules/category.module';
import { createStorageModule } from './modules/storage.module';
import { createStudentModule } from './modules/student.module';
import { createSubjectModule } from './modules/subject.module';
import { createTagModule } from './modules/tag.module';
import { createUserModule } from './modules/user.module';
import { createVerificationRequestModule } from './modules/verification-request.module';
import { createAcademicModule } from './modules/academic.module';

const container = createAppContainer();

container.load('StorageModule', createStorageModule());
container.load('CategoryModule', createCategoryModule());
container.load('TagModule', createTagModule());
container.load('StudentModule', createStudentModule());
container.load('SubjectModule', createSubjectModule());
container.load('VerificationRequestModule', createVerificationRequestModule());
container.load('UserModule', createUserModule());
container.load('AcademicModule', createAcademicModule());

export default container;
