import { UserResponse } from "@/types";
import { useMemo } from "react";
import { RestrictModal } from "./restrict-acct-modal";
import { LuUser } from "react-icons/lu";
import CircularProgress from "@/shared/CircularProgress";
type IProps = {
  user: UserResponse;
  loading?: boolean;
};

const ProfileInfo = ({ user, loading }: IProps) => {
  console.log(user);
  const userData = useMemo(() => {
    return [
      {
        title: "Full Name",
        value: user?.user?.first_name + " " + user?.user?.last_name,
      },
      {
        title: "Email address",
        value: user?.user?.email,
      },
      {
        title: "Phone Number",
        value: user?.user?.phone_number,
      },
      {
        title: "DOB",
        value: user?.user?.dob,
      },
      {
        title: "Gender",
        value: user?.user?.gender,
      },
      // {
      //   title: "BVN",
      //   value: "2345678909",
      // },
      // {
      //   title: "Country",
      //   value: user?.user?.,
      // },
      // {
      //   title: "State",
      //   value: "Lagos state",
      // },
      // {
      //   title: "City",
      //   value: "Lagos state",
      // },
      // {
      //   title: "State",
      //   value: "Lagos state",
      // },
      {
        title: "Address",
        value: user?.user?.address,
      },
      {
        title: "KYC",
        value: user?.user?.kyc_verified ? "Verified" : "Not Verified",
      },
    ];
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <CircularProgress />
      </div>
    );
  }
    
  // const [searchParams, setsearchParams] = useSearchParams();
  return  (
    <div className="flex gap-14 items-stretch">
      <div className="flex flex-col basis-1/2 rounded-xl overflow-hidden gap-y-[1px] *:py-3 ">
        {userData.map((data) => {
          return (
            <div className="grid grid-cols-[1.5fr_3fr]   bg-white">
              <div className="px-6 text-brand-primary font-medium">
                {data.title}
              </div>
              <div className="px-6">{data.value}</div>
            </div>
          );
        })}
        <div className="flex flex-row gap-4 bg-white">
          <div className="px-6 text-brand-primary">Restrict account</div>
          <div className="px-6 ">
            <RestrictModal id={user?.user?.id} blocked={user?.user?.is_blocked == "1"} />
          </div>
        </div>
      </div>
      <div className="">
        {user?.user?.user_image ? (
          <img
            src={user?.user?.user_image?.replace(/\\/g, "/") || "/usermock.png"}
            className="w-[320px]"
            alt=""
          />
        ) : (
          <div className="flex justify-center items-center w-[320px] h-[320px] bg-gray-100">
            <LuUser className="w-[320px] h-[320px ] text-gray-300" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
