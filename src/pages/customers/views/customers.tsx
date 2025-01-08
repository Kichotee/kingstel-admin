import { Tabs } from "@chakra-ui/react";
import ProfileInfo from "../components/profile-info";
import { WalletBanner } from "../components/wallet-banner";
import AllTransactions from "../components/all-transactions";

const Customers = () => {
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
  const tabs = [
    {
      tab: "Profile information",
      component: <ProfileInfo />,
    },
    {
      tab: "Transactions",
      component: <AllTransactions />,
    },
    {
      tab: "Card",
      component: <ProfileInfo />,
    },
  ];
  return (
    <div className="space-y-8">
      <WalletBanner walletDetails={walletDetails} />

      <div className="">
        <Tabs.Root defaultValue={"Profile information"}>
          <Tabs.List >
            {tabs.map((data) => {
              return <Tabs.Trigger px={6} value={data.tab}>{data.tab}</Tabs.Trigger>;
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
  );
};

export default Customers;
