import GHIcon from "../../../shared/icons/gh";
import NGIcon from "../../../shared/icons/ng";
import USIcon from "../../../shared/icons/us";
import { WalletCard } from "./wallet-card";

interface Wallet {
  amount: number | string;
  currency: string;
}

type Props = {
  walletDetails: Wallet[];
};
export const WalletBanner = ({ walletDetails }: Props) => {
  const ChooseFlag = (currency: string) => {
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
  const ChooseCurrencySymbol = (currency: string) => {
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
        <p className=" text-brand-primary">John doe</p>
        <p className="italic text-xs">Johndoe@gmail.com</p>
      </p>
      <div className=" w-full bg-[#D1DFFE80] p-[50px] flex-col gap-7 flex items-center rounded-[20px]">
      <p className=" font-bold uppercase">My Wallets</p>

        <div className="justify-between w-full flex items-center">
            {walletDetails.map((data) => {
              return (
                <WalletCard
                  amount={data.amount}
                  currency={ChooseCurrencySymbol(data.currency)}
                  flag={ChooseFlag(data.currency)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
