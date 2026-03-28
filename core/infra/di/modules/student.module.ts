import { PrismaStudentRepo } from "../../repos/prisma/student.repo";
import { createAppModule } from "../registry";

export const createStudentModule = () => {
  const studentModule = createAppModule();

  studentModule.bind("IStudentRepo").toClass(PrismaStudentRepo);

  return studentModule;
};
