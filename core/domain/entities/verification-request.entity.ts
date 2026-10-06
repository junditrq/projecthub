export enum VerificationStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export interface CreateVerificationRequestProps {
  collegeIdPicURL: string;
  userId: string;
  studentId: string;
}

export interface VerificationRequestProps extends CreateVerificationRequestProps {
  id: string;
  status: VerificationStatus;
  createdAt: Date;
  updatedAt: Date;
  reviewedById: string | null;
  rejectedReason: string | null;
}

export class VerificationRequest {
  constructor(private readonly _props: VerificationRequestProps) {}

  get id(): string {
    return this._props.id;
  }
  get collegeIdPicURL(): string {
    return this._props.collegeIdPicURL;
  }
  get status(): VerificationStatus {
    return this._props.status;
  }
  get userId(): string {
    return this._props.userId;
  }
  get studentId(): string {
    return this._props.studentId;
  }
  get reviewedById(): string | null {
    return this._props.reviewedById;
  }
  get createdAt(): Date {
    return this._props.createdAt;
  }
  get updatedAt(): Date {
    return this._props.updatedAt;
  }
  get rejectedReason(): string | null {
    return this._props.rejectedReason;
  }

  public static create(props: CreateVerificationRequestProps) {
    return new VerificationRequest({
      ...props,
      id: crypto.randomUUID(),
      status: VerificationStatus.PENDING,
      createdAt: new Date(),
      updatedAt: new Date(),
      reviewedById: null,
      rejectedReason: null,
    });
  }

  public static reconstitute(props: VerificationRequestProps) {
    return new VerificationRequest(props);
  }
}
