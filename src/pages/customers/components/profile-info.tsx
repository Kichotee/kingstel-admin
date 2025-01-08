import { Switch } from "@/components/ui/switch";


const ProfileInfo = () => {
  const userData = [
    {
      title: "Full Name",
      value: "John Doe",
    },
    {
      title: "Email address",
      value: "Johndoe@gmail.com",
    },
    {
      title: "Phone Number",
      value: "+2347890876541",
    },
    {
      title: "DOB",
      value: "30th Dec 1990",
    },
    {
      title: "Gender",
      value: "Male",
    },
    {
      title: "BVN",
      value: "2345678909",
    },
    {
      title: "Country",
      value: "Nigeria",
    },
    {
      title: "State",
      value: "Lagos state",
    },
    {
      title: "City",
      value: "Lagos state",
    },
    {
      title: "State",
      value: "Lagos state",
    },
    {
      title: "Address",
      value: "12 dosunmu street lagos",
    },
    {
      title: "KYC",
      value: "verified",
    },
  ];
  return (
    <div className="flex gap-14 items-stretch">
      <div className="flex flex-col basis-1/2  gap-y-[1px] *:py-3 ">
        {userData.map((data) => {
          return (
            <div className="grid grid-cols-[1fr_3fr]  bg-white">
              <div className="px-6 text-brand-primary font-medium">{data.title}</div>
              <div className="px-6">{data.value}</div>
            </div>
          );
        })}
        <div className="flex flex-row bg-white">
          <div className="px-6">Restrict account</div>
          <div className="px-6"><Switch variant="raised" /></div>
        </div>
      </div>
      <div className="">
        <img src="/usermock.png" className="w-[480px]" alt="" />
      </div>
    </div>
  );
};

export default ProfileInfo;
