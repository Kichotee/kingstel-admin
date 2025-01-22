/* eslint-disable @typescript-eslint/no-explicit-any */
import { toaster } from "@/components/ui/toaster";
import instance from "@/lib/api";
import { SingleResponseData } from "@/lib/api/type";
import { ICreateUser, ICustomers } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

const createUser = async (body: ICreateUser) => {
  try {
    const response = await instance.post<SingleResponseData<ICustomers>>(
      "/admin/create",
      body
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    
    throw new Error(error.response.data);
  }
};
const getUsers = async () => {
  try {
    const response = await instance.get("/admin/allAdmin");
    return response.data.data;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const useCreateAdmin = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (body: ICreateUser) => {
      return createUser(body);
    },
    onSuccess(data) {
      toaster.create({
        description: data.message,
        type: "success",
      });
    },
    onError(error, variables, context) {
        toaster.create({
          description: error.message,
          type: "error",
        });
        
    },
  });
  return { createAdminFn: mutateAsync, isPending };
};

export const useGetUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["admins"],
    queryFn: () => {
      return getUsers();
    },
  });
  return { data, isLoading };
};
