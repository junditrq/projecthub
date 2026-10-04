import { BaseError } from '../shared/base.error';

export abstract class DomainError<TCode extends string = string> extends BaseError<TCode> {}

export class BusinessRuleError extends DomainError<'BUSINESS_RULE_ERROR'> {
  readonly code = 'BUSINESS_RULE_ERROR' as const;
}

export class DomainValidationError extends DomainError<'DOMAIN_VALIDATION_ERROR'> {
  readonly code = 'DOMAIN_VALIDATION_ERROR' as const;
}
