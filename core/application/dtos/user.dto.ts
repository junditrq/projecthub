export enum UserRoleDTO {
  ADMIN = 'ADMIN',
  USER = 'USER',
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
  isStudent: boolean;
}
