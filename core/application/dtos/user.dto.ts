export enum UserRoleDTO {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  VISITOR = 'VISITOR',
}

export interface UserResponseDTO {
  id: string;
  name: string;
  email: string;
  image: string | null;
  githubUsername: string | null;
  linkedinUrl: string | null;
  hasBeenPrompted: boolean;
  role: UserRoleDTO;
}
