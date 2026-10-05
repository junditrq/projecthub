import { UserRole } from '../enums/user-role.enum';

export interface UserProps {
  id: string;
  name: string;
  email: string;
  image: string | null;
  githubUsername: string | null;
  linkedinUrl: string | null;
  hasBeenPrompted: boolean;
  role: UserRole;
  isStudent: boolean;
}

export class User {
  private _props: UserProps;

  constructor(props: UserProps) {
    this._props = props;
  }

  get id(): string {
    return this._props.id;
  }
  get name(): string {
    return this._props.name;
  }
  get email(): string {
    return this._props.email;
  }
  get image(): string | null {
    return this._props.image;
  }
  get githubUsername(): string | null {
    return this._props.githubUsername;
  }
  get linkedinUrl(): string | null {
    return this._props.linkedinUrl;
  }
  get hasBeenPrompted(): boolean {
    return this._props.hasBeenPrompted;
  }
  get role(): UserRole {
    return this._props.role;
  }
  get isStudent(): boolean {
    return this._props.isStudent;
  }

  public isAdmin(): boolean {
    return this._props.role === UserRole.ADMIN;
  }

  public canPerformAdminAction(): boolean {
    return this.isAdmin();
  }

  public markAsPrompted() {
    this._props.hasBeenPrompted = true;
  }

  public markAsVerifiedStudent() {
    this._props.isStudent = true;
  }

  public canRequestStudentVerification(): boolean {
    return !this._props.isStudent;
  }

  public static reconstitute(props: UserProps) {
    return new User(props);
  }
}
