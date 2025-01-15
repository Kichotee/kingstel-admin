interface MultiResponseData<T> {
  current_page: number;
  data: T[];
  per_page: number;
  total: number;
}
export interface SingleResponseData<T> {
  data: T;
  status: boolean;
  message: string;
}

export interface Response<T> {
  status: boolean;
  message: string;
  data: MultiResponseData<T>;
}
