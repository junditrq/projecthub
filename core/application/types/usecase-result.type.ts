export type UseCaseResult<T = void, ECode extends string = never> = [
  ECode,
] extends [never]
  ? UseCaseSuccess<T>
  : UseCaseSuccess<T> | { success: false; error: UseCaseError<ECode> };

type UseCaseSuccess<T> = T extends void ? { success: true } : { data: T };

export type UseCaseError<ECode> = {
  code: ECode;
  message: string;
};
