export interface SerializedError<TCode extends string = string> {
  readonly code: TCode;
  readonly message: string;
}

export abstract class BaseError<TCode extends string = string> extends Error {
  abstract readonly code: TCode;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  public toPlainObject(): SerializedError<TCode> {
    return {
      code: this.code,
      message: this.message,
    };
  }
}

export type InferErrorUnion<T extends Record<string, (...args: never[]) => BaseError>> = ReturnType<
  T[keyof T]
>;
