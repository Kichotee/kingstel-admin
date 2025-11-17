import GHIcon from "../../../shared/UI/icons/gh";
import NGIcon from "../../../shared/UI/icons/ng";
import USIcon from "../../../shared/UI/icons/us";
import { WalletCard } from "./wallet-card";
import { UserResponse } from "@/types";

interface Wallet {
  amount?: number | string;
  currency?: string;
}

type Props = {
  walletDetails: Wallet[];
  userDetails?:UserResponse["user"]
};
export const WalletBanner = ({ walletDetails, userDetails }: Props) => {
  const ChooseFlag = (currency?: string) => {
    switch (currency) {
      case "US":
        return <USIcon />;

      case "GH":
        return <GHIcon />;
      case "NG":
        return <NGIcon />;
      default:
        break;
    }
  };
  const ChooseCurrencySymbol = (currency?: string) => {
    switch (currency) {
      case "US":
        return "$";

      case "GH":
        return "¢";
      case "NG":
        return "₦";
      default:
        return "₦";
    }
  };

  return (
    <div className="] items-center  gap-[15px] flex flex-col">
      <p className="text-base text-left w-full pl-2 font-medium">
        <p className=" text-brand-primary">{userDetails?.first_name} {userDetails?.last_name}</p>
        <p className="italic text-xs">{userDetails?.email}</p>
      </p>
      <div className=" w-full bg-[#D1DFFE80] p-[50px] flex-col gap-7 flex items-center rounded-[20px]">
      <p className=" font-bold uppercase">My Wallets</p>

        <div className="justify-between w-full flex items-center">
            {walletDetails.map((data) => {
              return (
                <WalletCard
                  amount={data?.amount}
                  currency={ChooseCurrencySymbol(data?.currency)}
                  flag={ChooseFlag(data?.currency)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
