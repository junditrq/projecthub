// TODO: refactor into rich domain model instead of this anemic model
export interface UserProps {
  id: string;
  name: string;
  email: string;
  image: string | null;
  githubUsername: string | null;
  linkedinUrl: string | null;
  hasBeenPrompted: boolean;
  role: UserRole;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  VISITOR = 'VISITOR',
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

  public markAsPrompted() {
    this._props.hasBeenPrompted = true;
  }

  public canRequestStudentVerification(): boolean {
    return this._props.role === UserRole.VISITOR;
  }

  public static reconstitute(props: UserProps) {
    return new User(props);
  }
}
