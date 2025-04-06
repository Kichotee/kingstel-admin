/* eslint-disable @typescript-eslint/no-explicit-any */
import { toaster } from "@/components/ui/toaster";
import instance from "@/lib/api";
import { SingleResponseData } from "@/lib/api/type";
import { IChangeUserPassword, ICreateUser, ICustomers } from "@/types";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

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
const getSingleAdmin = async (id: string) => {
  try {
    const response = await instance.get("/admin/user/" + id);
    return response.data.data;
  } catch (e: any) {
    throw new Error(e);
  }
};

const updatePassword = async (
  data: Omit<IChangeUserPassword, "confirm_password">
) => {
  try {
    const response = await instance.put("/users/change-password", data);
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.data);
  }
};

const updateUser = async (body: ICreateUser, id: string) => {
  console.log(body);

  try {
    const response = await instance.put<SingleResponseData<ICustomers>>(
      "/admin/update",
      {
        id,
        ...body,
      }
    );
    return response.data;
  } catch (error: any) {
    console.log(error);

    throw new Error(error.response.data.message || error.response.data.error);
  }
};

export const useCreateAdmin = () => {
  const queryClient = new QueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (body: ICreateUser) => {
      return createUser(body);
    },
    onSuccess(data) {
      toaster.create({
        description: data.message,
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["admins"],
      });
    },
    onError(error) {
      toaster.create({
        description: error.message,
        type: "error",
      });
    },
  });
  return { createAdminFn: mutateAsync, isPending };
};
export const useUpdateateAdmin = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: ({ body, id }: { body: ICreateUser; id: string }) => {
      console.log(body);
      return updateUser(body, id);
    },
    onSuccess(data) {
      toaster.create({
        description: data.message,
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["admins"],
      });
    },
    onError(error) {
      toaster.create({
        description: error.message,
        type: "error",
      });
    },
  });
  return { updateAdminFn: mutateAsync, isPending };
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
export const useGetSingleUser = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["admin-user"],
    queryFn: () => {
      return getSingleAdmin(id);
    },
  });
  return { data, isLoading };
};

export const usePasswordChange = () => {
  const {mutateAsync, isPending} = useMutation({
    mutationFn: (data: Omit<IChangeUserPassword, "confirm_password">) => {
      return updatePassword(data);
    },
    onSuccess(data) {
      toaster.create({
        description: data.message,
        type: "success",
      });
    },
    onError(error) {
      toaster.create({
        description: error.message,
        type: "error",
      });
    },
  });
  return {changePassFn:mutateAsync, isPending}
};
