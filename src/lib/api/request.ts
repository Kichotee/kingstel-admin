import { AxiosRequestConfig } from "axios";
import instance from ".";

export type ApiObjType = Record<string, string | undefined | number | string[] | number[]>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type FuncProp<T> = {
  url: string;
  payload: T;
  config?: AxiosRequestConfig;
};
type GetFuncProp<T extends ApiObjType> = {
  url: string;
  params?: T | undefined;
};

export const getRequestWithParams = async <T extends ApiObjType, R>({
  url,
  params,
}: GetFuncProp<T>) => {
  const response = await instance.get<R>(url, { params });
  const { data } = response;
  return data;
};