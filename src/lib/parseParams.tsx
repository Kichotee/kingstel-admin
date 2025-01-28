/* eslint-disable @typescript-eslint/no-explicit-any */
export type ParseQueryParams = Record<string | symbol | number, string | string[] | boolean>;

export const parseQueryParams = (queryParams: ParseQueryParams) => {
  const params = new URLSearchParams();
  Object.keys(queryParams).forEach((key) => {
    const queryParamsKeyValue = queryParams[key];
    if (queryParamsKeyValue instanceof Array) {
      queryParamsKeyValue.forEach((item: any) => {
        params.append(`${key}`, item);
      });
    } else if (typeof queryParamsKeyValue === "boolean") {
        params.set(key, `${queryParamsKeyValue}`);
      } else if (queryParamsKeyValue) {
        params.set(key, queryParamsKeyValue);
      }
  });
  const decodedParams = new URLSearchParams();
  params.forEach((value, key) => {
    decodedParams.set(key, value.replace(/%40/g, '@'));
  });

  return decodedParams;
  
};
