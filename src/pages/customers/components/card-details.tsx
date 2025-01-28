import { PageTitle } from "@/shared/UI/general-page-title";
import AllTransactions from "./all-transactions";
import { CardBox } from "./card-box";
import { UserResponse } from "@/types";

type IProp = {
  card?: UserResponse["cards"];
};

const CardDetails = ({ card }: IProp) => {
  return (
    <div className="">
      <div className="flex justify-center gap-7">
        <CardBox card={card} />
        <div className="bg-white   text-xs w-[342px]">
          <div className=" flex border-b font-medium border-[#D1DFFE]">
            <p className="basis-2/5 text-[#0F00BD] p-[12px_24px]">Card Name</p>
            <p className="basis-3/5 p-[12px_24px] capitalize">{card?.name_on_card}</p>
          </div>
          <div className=" flex border-b font-medium border-[#D1DFFE]">
            <p className="basis-2/5 text-[#0F00BD] p-[12px_24px]">Card Number</p>
            <p className="basis-3/5 p-[12px_24px]">
              {card?.pan.slice(0, 4) +
                "   " +
                card?.pan.slice(4, 8) +
                "   " + "  "+
                card?.pan.slice(8, 12) +
                "   " +
                card?.pan.slice(12, 16)}
            </p>
          </div>
          <div className=" flex border-b font-medium border-[#D1DFFE]">
            <p className="basis-2/5 text-[#0F00BD] p-[12px_24px]">Expiry date</p>
            <p className="basis-3/5 p-[12px_24px]">{card?.expiry_year}</p>
          </div>
          <div className=" flex border-b font-medium border-[#D1DFFE]">
            <p className="basis-2/5 text-[#0F00BD] p-[12px_24px]">cvv</p>
            <p className="basis-3/5 p-[12px_24px]">{card?.cvv ?? "-"}</p>
          </div>
          <div className=" flex border-b font-medium border-[#D1DFFE]">
            <p className="basis-2/5 text-[#0F00BD] p-[12px_24px]">Status</p>
            <p className="basis-3/5 p-[12px_24px]">Restricted</p>
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
