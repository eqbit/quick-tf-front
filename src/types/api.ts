export type ReqResponse<T> = {
  data: T;
  success: boolean;
  error?: string;
}
