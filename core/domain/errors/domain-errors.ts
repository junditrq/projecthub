/**
 * Base class for all custom domain errors.
 */
export class DomainError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

/**
 * Thrown when an entity cannot be found.
 */
export class NotFoundError extends DomainError {}

/**
 * Thrown when an action violates a business rule.
 */
export class BusinessRuleError extends DomainError {}

/**
 * Thrown when user is not authenticated.
 */
export class AuthError extends DomainError {}

/**
 * Thrown when a user is not logged in.
 * This should trigger a sign-out.
 */
export class AuthenticationError extends AuthError {
  constructor(message: string = "You must be logged in.") {
    super(message);
  }
}

/**
 * Thrown when a user is not authorized (e.g., wrong role).
 * This should NOT trigger a sign-out.
 */
export class AuthorizationError extends AuthError {
  constructor(message: string = "You do not have permission to do this.") {
    super(message);
  }
}
