import { BusinessRuleError } from "../errors/domain-errors";

// TODO: refactor into rich domain model instead of this anemic model
export interface UserProps {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  githubUsername: string | null;
  linkedinUrl: string | null;
  hasBeenPrompted: boolean;
  role: "admin" | "student" | "visitor";
}

export class User {
  private _props: UserProps;

  constructor(props: UserProps) {
    this._props = props;
  }

  get id(): string {
    return this._props.id;
  }
  get name(): string | null {
    return this._props.name;
  }
  get email(): string | null {
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
  get role(): "admin" | "student" | "visitor" {
    return this._props.role;
  }

  public markAsPrompted() {
    if (this._props.hasBeenPrompted) {
      throw new BusinessRuleError("User has already been prompted");
    }
    this._props.hasBeenPrompted = true;
  }

  public static reconstitute(props: UserProps) {
    return new User(props);
  }
}
