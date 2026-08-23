import { DOMAIN_ERROR_CODES, DomainErrorCode } from './domain-error-codes';

/**
 * Base class for all custom domain errors.
 */
export class DomainError extends Error {
  code: DomainErrorCode;
  constructor(code: DomainErrorCode, message: string) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
  }
}

/**
 * Thrown when an entity cannot be found.
 */
export class NotFoundError extends DomainError {
  constructor(message: string = 'The requested resource was not found.') {
    super(DOMAIN_ERROR_CODES.NOT_FOUND, message);
  }
}

/**
 * Thrown when an action violates a business rule.
 */
export class BusinessRuleError extends DomainError {
  constructor(message: string) {
    super(DOMAIN_ERROR_CODES.BUSINESS_RULE_VIOLATION, message);
  }
}

/**
 * Thrown when user is not authenticated.
 */
export class AuthError extends DomainError {}

/**
 * Thrown when a user is not logged in.
 * This should trigger a sign-out.
 */
export class AuthenticationError extends AuthError {
  constructor(message: string = 'You must be logged in.') {
    super(DOMAIN_ERROR_CODES.UNAUTHENTICATED, message);
  }
}

/**
 * Thrown when a user is not authorized (e.g., wrong role).
 * This should NOT trigger a sign-out.
 */
export class AuthorizationError extends AuthError {
  constructor(message: string = 'You do not have permission to do this.') {
    super(DOMAIN_ERROR_CODES.UNAUTHORIZED, message);
  }
}
