import { PageTitle } from "@/shared/UI/general-page-title";
import AllTransactions from "./all-transactions";
import { CardBox } from "./card-box";

const CardDetails = () => {
  return (
    <div className="">
      <div className="flex justify-center gap-7">
        <CardBox />
        <div className="bg-white   text-sm w-[342px]">
            <div className=" flex border-b font-medium border-[#D1DFFE]">
                <p className="basis-2/5 text-[#0F00BD] p-[12px_24px]">Card Name</p>
                <p className="basis-3/5 p-[12px_24px]">John doe</p>
            </div>

        </div>
      </div>

      <div className="py-8 space-y-6">
        <PageTitle title="Recent transactions" />

        <AllTransactions />
      </div>
    </div>
  );
};

export default CardDetails;
