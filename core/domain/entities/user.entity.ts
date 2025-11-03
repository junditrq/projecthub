import { Like } from "./like.entity";
import { Student } from "./student.entity";

export interface User {
  id: string;
  name?: string;
  email?: string;
  image?: string;
  role: UserRole;
  githubUsername?: string;
  linkedinUrl?: string;
  hasBeenPrompted: boolean;
  student?: Student;
  likes: Like[];
}

export enum UserRole {
  admin = "admin",
  visitor = "visitor",
  student = "student",
}
