export interface IAPiResponse<T> {
  status: boolean;
  message: string;
  data: T;
}
