import instance from "@/lib/api";
import { SingleResponseData } from "@/lib/api/type";
import { UserResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

const getCardDetails = async (id: string, email: string) => {
  try {
    const response = await instance.get(
      `/admin/transactions?email=${email}&id=${id}`
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
const getCardTransacts = async (email: string) => {
  try {
    const res = await instance.get(`/admin/card_details?email=${email}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.data?.message || error?.message);
  }
};
const getCustomers = async (page: number) => {
  try {
    const response = await instance.get(`/admin/user?page=` + page);
    return response.data.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
const getSingleCustomer = async (id: string) => {
  try {
    const response = await instance.get<
      SingleResponseData<{ data: UserResponse }>
    >(`/admin/user/${id}`);
    return response.data.data.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};

export const useGetCardDetails = (id: string, email: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["card-details", id, email],
    queryFn: () => {
      return getCardDetails(id, email);
    },
  });
  return { data, isLoading };
};
export const useGetAllCustomers = (page: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["customers", page],
    queryFn: () => getCustomers(page),
  });
  return { customers: data, isLoading };
};
export const useGetSingleCustomer = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["single-customer", id],
    queryFn: () => {
      return getSingleCustomer(id);
    },
  });
  return { data, isLoading };
};

export const useGetCardTransactions = (email: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["card-transactions", email],
    queryFn: () => {
      return getCardTransacts(email);
    },
  });

  return { cardTranscts: data, transactionsLoading: isLoading };
};
