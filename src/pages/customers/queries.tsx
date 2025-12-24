/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import instance from "@/lib/api";
import { MultiResponse, SingleResponseData } from "@/lib/api/type";
import { UserCardTransactions, UserResponse } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getCardTransactions = async (id: string, email: string) => {
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
const getCardTransacts = async (id: string) => {
  try {
    const res = await instance.get<MultiResponse<UserCardTransactions>>(`/admin/transaction/card/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.data?.message || error?.message);
  }
};
const getSingleCardDetails = async (id: string) => {
  try {
    const res = await instance.get<MultiResponse<UserCardTransactions>>(`/admin/bridge-card/user/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.data?.message || error?.message);
  }
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
const restrictUser = async (id: number, action:  `block` | `unblock`) => {
  try {
    const res = await instance.post(`/admin/block-unblock-user?email=`, {
      action,
      user_id: id,
    });
    return res.data;
  } catch (error: any) {
    throw new Error(error?.data?.message || error?.message);
  }
};

export const useGetCardDetails = (id: string, email: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["card-details", id, email],
    queryFn: () => {
      return getCardTransactions(id, email);
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
export const useGetSingleCardDetails = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["card-details", id],
    queryFn: () => {
      return getSingleCardDetails(id);
    },
  });

  return { cardDetails: data, transactiondetailsLoading: isLoading };
};

export const useRestrictUser = () => {
  const queryClient = useQueryClient();

  
  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationKey: ["approveCard"],
    mutationFn: ({ ref, status }: { ref: number; status: `block` | `unblock` }) => {
      return restrictUser(ref, status);
    },
    onSuccess() {
      toast.success("User status changed");
      queryClient.invalidateQueries({ queryKey: ["single-customer"] });
    },
  });
  return { restrictFn: mutateAsync, isPending, isSuccess };
};

