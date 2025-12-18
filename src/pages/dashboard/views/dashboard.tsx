import { BarChart } from "../components/bar-chart";
import { PageTitle } from "@/shared/UI/general-page-title";
import { usePlatformOverview } from "@/pages/transactions/queries";
import { useEffect, useState } from "react";
import AllTransactions from "@/pages/customers/components/all-transactions";
import { AnalyticsResponse, useGetAnalytics } from "../queries";

const Dashboard = () => {
  const { data } = usePlatformOverview();

  const [overview, setOverview] = useState([
    {
      icon: "/icons/transaction.png",
      title: "SUCCESSFUL TRANSACTIONS",
      number: "500",
    },
    {
      icon: "/icons/money-bag.png",
      title: "AVAILABLE CURRENCIES",
      number: "3",
    },
    {
      icon: "/icons/person.png",
      title: "TOTAL CUSTOMERS",
      number: "200",
    },
  ]);

  useEffect(() => {
    setOverview((prev) => {
      return prev.map((item, index) => {
        console.log(item, data?.data?.data?.users);
        if (index === 0) {
          return { ...item, number: data?.data?.transaction?.successful };
        }

        if (index === 2) {
          return { ...item, number: data?.data?.users };
        }
        return item;
      });
    });
  }, [data]);

  const { analytics } = useGetAnalytics();

  return (
    <div className="flex flex-col gap-[30px] text-black font-poppins">
      <input
        type="text"
        className="py-2.5 mx-auto bg-white  placeholder:text-center w-full max-w-[639px] rounded-[15px] placeholder:text-xs"
        placeholder="Search customer by Phone Number, Email, BVN, Kingstelpay tag 🔍"
      />
      <div className="gap-y-6 flex flex-col w-full items-center">
        <div className="flex flex-col w-full gap-6">
          <PageTitle title="Quick Overview" />
          <div className="rounded-[20px] bg-white p-[61px_58px] flex gap-4 justify-between">
            {overview.map((data) => {
              return (
                <div className="flex max-h-[216px] min-w-[220px] flex-col gap-4 items-center rounded-[30px] border-brand-primary/40 border  py-[22px]  px-2.5">
                  <img src={data.icon} className="max-w-[74px]" alt="" />
                  <p className="text-brand-primary text-sm font-semibold">
                    {data.title}
                  </p>
                  <p className="font-bold">{data.number}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white w-full p-5 rounded-[20px]">
          <BarChart data={analytics as AnalyticsResponse} />
        </div>
        <div className="bg-white w-full p-5 rounded-2xl">
          <AllTransactions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
