interface Response<T = any> {
  code: string;
  data: T;
  message?: string;
}
