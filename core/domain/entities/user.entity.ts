import { Student } from "./student.entity";
import { Like } from "./like.entity";

export interface User {
  id: string;
  name?: string;
  email?: string;
  image?: string;
  role: UserRole;
  githubUsername?: string;
  linkedinUrl?: string;
  student?: Student;
  likes: Like[];
}

export enum UserRole {
  admin = "admin",
  visitor = "visitor",
  student = "student",
}
