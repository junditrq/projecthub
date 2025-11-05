export interface User {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  githubUsername: string | null;
  linkedinUrl: string | null;
  hasBeenPrompted: boolean;
  role: "admin" | "student" | "visitor";
}
