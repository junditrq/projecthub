export type FormActionResult<FormDataType> =
  | {
      success: true;
    }
  | {
      success: false;
      fieldErrors?: Partial<Record<keyof FormDataType, string>>;
      serverError?: string;
    };
