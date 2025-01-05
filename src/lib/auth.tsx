import { useSelector } from "react-redux";
import { UserState } from "@/features/auth/store/userSlice";

export const useAuth = () => {
  const { user } = useSelector((state: UserState) => {
    return state.user;
  });
  return user;
};
