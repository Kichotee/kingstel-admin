import { UserResponse } from "@/types";
import { useMemo } from "react";
import { RestrictModal } from "./restrict-acct-modal";
type IProps = {
  user: UserResponse;
};

const ProfileInfo = ({ user }: IProps) => {
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
        value: "12 dosunmu street lagos",
      },
      {
        title: "KYC",
        value: user?.user?.kyc_verified ? "Verified" : "Not Verified",
      },
    ];
  }, [user]);
  // const [searchParams, setsearchParams] = useSearchParams();
  return (
    <div className="flex gap-14 items-stretch">
      <div className="flex flex-col basis-1/2  gap-y-[1px] *:py-3 ">
        {userData.map((data) => {
          return (
            <div className="grid grid-cols-[1.5fr_3fr]  bg-white">
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
           <RestrictModal/>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src={user?.user?.user_image?.replace(/\\/g, "/") || "/usermock.png"}
          className="w-[480px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
