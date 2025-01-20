import { Tabs } from "@chakra-ui/react";
import ProfileInfo from "../components/profile-info";
import { WalletBanner } from "../components/wallet-banner";
import AllTransactions from "../components/all-transactions";
import CardDetails from "../components/card-details";
import { useGetSingleCustomer } from "../queries";
import { useParams } from "react-router-dom";
import { UserResponse } from "@/types";

const CustomerDetails = () => {
  const walletDetails = [
    {
      amount: 100,
      currency: "NG",
    },
    {
      amount: 100,
      currency: "GH",
    },
    {
      amount: 100,
      currency: "US",
    },
  ];
  const {id}= useParams()
  const {data}= useGetSingleCustomer(id!)
  const tabs = [
    {
      tab: "Profile information",
      component: <ProfileInfo user={data as UserResponse} />,
    },
    {
      tab: "Transactions",
      component: <AllTransactions />,
    },
    {
      tab: "Card",
      component: <CardDetails />,
    },
  ];
  return (
    <div className="flex flex-col gap-4 items-center">
      <input
        type="text"
        className="py-2.5 mx-auto bg-white  placeholder:text-center w-full max-w-[639px] rounded-[15px] placeholder:text-xs"
        placeholder="Search customer by Phone Number, Email, BVN, Kingstelpay tag 🔍"
      />
      <div className="space-y-8 w-full">
        <WalletBanner walletDetails={walletDetails} />
        <div className="">
          <Tabs.Root defaultValue={"Profile information"}>
            <Tabs.List>
              {tabs.map((data) => {
                return (
                  <Tabs.Trigger px={6} value={data.tab}>
                    {data.tab}
                  </Tabs.Trigger>
                );
              })}
            </Tabs.List>

            {tabs.map((data) => {
              return (
                <Tabs.Content value={data.tab}>{data.component}</Tabs.Content>
              );
            })}
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
