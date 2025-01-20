import instance from "@/lib/api";
import { SingleResponseData } from "@/lib/api/type";
import { UserResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

const getCardDetails = async (id:string, email:string) => {
    try {
      const response = await instance.get(`/admin/transactions?email=${email}&id=${id}`);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error);
    }
  };
const getCustomers = async () => {
    try {
      const response = await instance.get(`/admin/user`);
      return response.data.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error);
    }
  };
const getSingleCustomer = async (id:string) => {
    try {
      const response = await instance.get<SingleResponseData<{data:UserResponse}>>(`/admin/user/${id}`);
      return response.data.data.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error);
    }
  };

  export const useGetCardDetails = (id:string, email:string) => {
    const { data, isLoading } = useQuery({
      queryKey: ["card-details",id,email],
      queryFn: () => {
        return getCardDetails(id,email);
      },
    });
    return { data, isLoading };
  }
export const useGetAllCustomers = () => {
    const { data, isLoading } = useQuery({
      queryKey: ["customers"],
      queryFn: ()=> getCustomers(),
    });
    return { customers:data, isLoading };
  }
export const useGetSingleCustomer = (id:string) => {
    const { data, isLoading } = useQuery({
      queryKey: ["single-customer",id],
      queryFn: () => {
        return getSingleCustomer(id);
      },
    });
    return { data, isLoading };
  }