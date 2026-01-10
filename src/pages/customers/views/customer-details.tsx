
import ProfileInfo from "../components/profile-info";
import { WalletBanner } from "../components/wallet-banner";
// import AllTransactions from "../components/all-transactions";
import CardDetails from "../components/card-details";
import {  useGetSingleCardDetails, useGetSingleCustomer } from "../queries";
import { useParams } from "react-router-dom";
import { UserResponse } from "@/types";
import CustomerTransactions from "../components/customer-transactions";
import { useMemo } from "react";
import { TabsContent, TabsList, Tabs, TabsTrigger } from "@/components/ui/tabs";

const CustomerDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleCustomer(id!);
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {cardDetails} = useGetSingleCardDetails(data?.cards?.card_reference as string);
  console.log(cardDetails)
  const walletDetails = useMemo(() => {
    return [
      {
        amount: data?.user?.naira_balance,
        currency: "NG",
      },
      {
        amount: data?.user?.cedis_balance,
        currency: "GH",
      },
      {
        amount: data?.user?.dollar_balance,
        currency: "US",
      },
    ];
  }, [data]);
  // const {cardTranscts}= useGetCardTransactions(data?.user?.email as string)
  const tabs = [
    {
      tab: "Profile information",
      component:() => <ProfileInfo loading={isLoading} user={data as UserResponse} />,
    },
    {
      tab: "Transactions",
      component: () => <CustomerTransactions />,
    },
    {
      tab: "Card",
      component: () =>   <CardDetails card={cardDetails?.data}   />,
    },
  ];
  return (
    <div className="flex flex-col pb-8 gap-4 items-center">
      <input
        type="text"
        className="py-2.5 mx-auto bg-white  placeholder:text-center w-full max-w-[639px] rounded-[15px] placeholder:text-xs"
        placeholder="Search customer by Phone Number, Email, BVN, Kingstelpay tag 🔍"
      />
      <div className="space-y-8 w-full">
        <WalletBanner walletDetails={walletDetails} userDetails={data?.user} />
        <div className="">
          <Tabs defaultValue={"Profile information"}>
            <TabsList>
              {tabs.map((data) => {
                return (
                  <TabsTrigger value={data.tab}>
                    {data.tab}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {tabs.map((data) => {
              return (
                <TabsContent value={data.tab}>{data.component(  )}</TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
