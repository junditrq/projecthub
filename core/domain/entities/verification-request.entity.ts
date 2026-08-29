export enum VerificationStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export interface CreateVerificationRequestProps {
  submittedArabicName: string;
  collegeIdPicURL: string;
  userId: string;
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
  get submittedArabicName(): string {
    return this._props.submittedArabicName;
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
    const now = new Date();
    return new VerificationRequest({
      ...props,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
      reviewedById: null,
      rejectedReason: null,
      status: VerificationStatus.PENDING,
    });
  }

  public static reconstitute(props: VerificationRequestProps) {
    return new VerificationRequest(props);
  }
}
