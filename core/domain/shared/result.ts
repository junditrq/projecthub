import { BaseError, SerializedError } from './base.error';

export type Ok<T> = {
  ok: true;
  value: T;
};

export type Fail<E> = {
  ok: false;
  error: E;
};

export type Result<T, E extends BaseError> = Ok<T> | Fail<E>;

export const ok = <T>(value: T): Ok<T> => ({ ok: true, value });
export const fail = <E extends BaseError>(error: E): Fail<E> => ({ ok: false, error });

export const map = <T, U, E extends BaseError>(
  result: Result<T, E>,
  fn: (value: T) => U
): Result<U, E> => {
  if (result.ok) {
    return ok(fn(result.value));
  }
  return result;
};

export const getOrElse = <T, E extends BaseError>(result: Result<T, E>, defaultValue: T): T => {
  if (result.ok) {
    return result.value;
  }
  return defaultValue;
};

export const combine = <T, E extends BaseError>(results: Result<T, E>[]): Result<T[], E> => {
  const values: T[] = [];
  for (const result of results) {
    if (!result.ok) {
      return result;
    }
    values.push(result.value);
  }
  return ok(values);
};

export type SerializedResult<T, E extends BaseError> = Ok<T> | Fail<SerializedError<E['code']>>;

export const serializeResult = <T, E extends BaseError>(
  result: Result<T, E>
): SerializedResult<T, E> => {
  if (result.ok) {
    return ok(result.value);
  }
  return {
    ok: false,
    error: result.error.toPlainObject(),
  };
};
