import { BaseError } from '@/core/domain/shared/base.error';

export class ActorNotFoundError extends BaseError<'ACTOR_NOT_FOUND'> {
  readonly code = 'ACTOR_NOT_FOUND' as const;
  constructor(userId: string) {
    super(`Actor with ID ${userId} not found in DB.`);
  }
}

export class UnauthenticatedError extends BaseError<'UNAUTHENTICATED'> {
  readonly code = 'UNAUTHENTICATED' as const;

  constructor(message = 'You must be logged in.') {
    super(message);
  }
}

export class UnauthorizedError extends BaseError<'UNAUTHORIZED'> {
  readonly code = 'UNAUTHORIZED' as const;

  constructor(message = 'You do not have permission perform this action.') {
    super(message);
  }
}

export class NotFoundError<TCode extends string = 'NOT_FOUND'> extends BaseError<TCode> {
  readonly code: TCode = 'NOT_FOUND' as TCode;

  constructor(message = 'The requested resource was not found.') {
    super(message);
  }
}

export class ConflictError<TCode extends string = 'CONFLICT'> extends BaseError<TCode> {
  readonly code: TCode = 'CONFLICT' as TCode;

  constructor(message = 'The request conflicts with the current state of the resource.') {
    super(message);
  }
}

export class UnprocessableError<TCode extends string = 'UNPROCESSABLE'> extends BaseError<TCode> {
  readonly code: TCode = 'UNPROCESSABLE' as TCode;

  constructor(message = 'The request could not be processed.') {
    super(message);
  }
}
