export type ApiResponseBase<T> = {
  success: boolean;
  data: T;
  error: {
    message: string;
    code: string;
  };
};
