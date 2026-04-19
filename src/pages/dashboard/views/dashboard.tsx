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
    <div className="flex flex-col gap-5 text-black font-poppins sm:gap-[30px]">
      {/* <input
        type="text"
        className="mx-auto w-full rounded-[15px] bg-white px-4 py-3 text-sm placeholder:text-left placeholder:text-xs sm:max-w-[639px] sm:py-2.5 sm:placeholder:text-center"
        placeholder="Search customer by Phone Number, Email, BVN, Kingstelpay tag 🔍"
      /> */}
      <div className="flex w-full flex-col gap-y-5 items-center sm:gap-y-6">
        <div className="flex flex-col w-full gap-6">
          <PageTitle title="Quick Overview" />
          <div className="grid grid-cols-1 gap-4 rounded-[20px] bg-white p-4 sm:grid-cols-2 sm:p-8 lg:grid-cols-3 lg:gap-5 lg:p-[61px_58px]">
            {overview.map((data) => {
              return (
                <div
                  key={data.title}
                  className="flex min-h-[180px] flex-col items-center justify-center gap-3 rounded-[24px] border border-brand-primary/40 px-2 py-3 text-center sm:min-h-[200px] sm:gap-4 sm:rounded-[30px]"
                >
                  <img src={data.icon} className="w-14 max-w-[74px] sm:w-auto" alt="" />
                  <p className="text-xs font-semibold text-brand-primary sm:text-sm">
                    {data.title}
                  </p>
                  <p className="text-lg font-bold sm:text-xl">{data.number}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full rounded-[20px] bg-white p-3 sm:p-5">
          {/*  <BarChart data={analytics as AnalyticsResponse} /> */}
        </div>
        <div className="w-full rounded-2xl bg-white p-3 sm:p-5">
          <AllTransactions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
