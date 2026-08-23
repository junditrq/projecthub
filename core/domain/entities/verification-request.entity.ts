export interface VerificationRequestProps {
  id: string;
  submittedArabicName: string;
  collegeIdPicUrl: string;
  status: VerificationStatus;
  userId: string;
  reviewedById: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export class VerificationRequest {
  constructor(private _props: VerificationRequestProps) {}

  get id(): string {
    return this._props.id;
  }
  get submittedArabicName(): string {
    return this._props.submittedArabicName;
  }
  get collegeIdPicUrl(): string {
    return this._props.collegeIdPicUrl;
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

  public static create(
    props: Omit<
      VerificationRequestProps,
      'id' | 'createdAt' | 'updatedAt' | 'reviewedById' | 'status'
    >
  ) {
    const now = new Date();
    return new VerificationRequest({
      ...props,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
      reviewedById: null,
      status: VerificationStatus.pending,
    });
  }

  public static reconstitute(props: VerificationRequestProps) {
    return new VerificationRequest(props);
  }
}

export enum VerificationStatus {
  pending = 'pending',
  approved = 'approved',
  rejected = 'rejected',
}
