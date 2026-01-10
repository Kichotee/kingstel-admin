import { PageTitle } from "@/shared/UI/general-page-title";
import ChangePassword from "@/pages/manage-users/components/change-password";
import { useGetSingleUser } from "@/pages/manage-users/queries";

const ManageProfile = () => {
const {data, isLoading} = useGetSingleUser("")
 
  return (
    <div className="space-y-7 max-w-[80%]">
      <PageTitle title={"Manage Profile"} />
      <div className="flex gap-[18px]">
        <div className="basis-1/2 bg-white">
          <ChangePassword />
        </div>
        {/* <div className="basis-1/2 bg-white">
          <div className="p-[43px_37px] flex flex-col gap-[52px]">
            <PageTitle title="Admin user Details" />
            <div className="flex flex-col gap-5">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">First Name</p>
                <p className="text-base font-medium">—</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Last Name</p>
                <p className="text-base font-medium">—</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="text-base font-medium">—</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="text-base font-medium">—</p>
              </div>
            </div>
          
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ManageProfile;
