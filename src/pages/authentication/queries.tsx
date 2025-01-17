import instance from "@/lib/api";
import Auth from "@/lib/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const loginUser = async (body: { email: string; password: string }) => {
  try {
    const response = await instance.post("/admin/login", body);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (body: { email: string; password: string }) => {
      return loginUser(body);
    },
    onSuccess(data) {
      navigate("/dashboard/home");
      Auth.setToken(data.data.token);
    },
  });
  return { login: mutateAsync, isPending };
};
