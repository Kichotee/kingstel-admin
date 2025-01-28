/* eslint-disable @typescript-eslint/no-unused-vars */
import instance from "@/lib/api";
import { getRequestWithParams } from "@/lib/api/request";
import { MultiResponse } from "@/lib/api/type";
import { parseQueryParams, ParseQueryParams } from "@/lib/parseParams";
import { ITransaction } from "@/types";
import { useQuery } from "@tanstack/react-query";

type TransactionResponse = MultiResponse<ITransaction>;

type IPage = {
  current?: number;
  page?: number;
  size?: number;
  type?: string;
  email?: string;
};

const getTransactions = async (params: IPage) => {
  try {
    const response = await instance.get<TransactionResponse>(
      `/admin/transaction?page=${params?.current}&type=${params?.type}&email=${
        params?.email || ""
      } `
    );
    return response.data.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
const platformOverview = async () => {
  try {
    const response = await instance.get("/admin/details");
    return response.data.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};

export const usePlatformOverview = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["platform-overview"],
    queryFn: () => {
      return platformOverview();
    },
  });
  return { data, isLoading };
};
export const useTransactions = ({ current, type,email }: IPage) => {
  console.log(email)
  
  const { data, isLoading } = useQuery({
    queryKey: ["transactions", current,type,email],
    queryFn: () => {
      return getRequestWithParams<any, any>({
        url: "/admin/transaction",
        params: parseQueryParams({
          page: current,
          type,
          email:email?.replace('%','@')
        } as unknown as ParseQueryParams),
      });
    },
  });
  return { data, isLoading };
};
