import { PageTitle } from "@/shared/UI/general-page-title";
import AllTransactions from "@/pages/customers/components/all-transactions";

const Transactions = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <input
        type="text"
        className="py-2.5 mx-auto bg-white  placeholder:text-center w-full max-w-[639px] rounded-[15px] placeholder:text-xs"
        placeholder="Search customer by Phone Number, Email, BVN, Kingstelpay tag 🔍"
      />
      <div className="w-full space-y-8">
        <PageTitle title="Customer Transactions" />
        <div className="w-full">
          <AllTransactions />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
