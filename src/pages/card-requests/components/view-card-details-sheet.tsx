import { CardRequest } from "@/lib/api/type";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface ViewCardDetailsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  card: CardRequest | undefined;
  isLoading: boolean;
}

export const ViewCardDetailsSheet = ({
  open,
  onOpenChange,
  card,
  isLoading,
}: ViewCardDetailsSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Card Details</SheetTitle>
        </SheetHeader>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex mt-8 flex-col space-y-4 w-full">
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600">Name:</div>
              <div className="text-xs text-brand-primary">
                {card?.name_on_card}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Email:</div>
              <div className="text-xs text-brand-primary">
                {card?.email}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Card Type:</div>
              <div className="text-xs text-brand-primary">
                {card?.type}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Brand:</div>
              <div className="text-xs text-brand-primary">
                {card?.brand || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Pan:</div>
              <div className="text-xs text-brand-primary">
                {card?.pan}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Last Four Digits:</div>
              <div className="text-xs text-brand-primary">
                {card?.last_four_number || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Expiry:</div>
              <div className="text-xs text-brand-primary">
                {card?.expiry_month}/{card?.expiry_year}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Currency:</div>
              <div className="text-xs text-brand-primary">
                {card?.currency}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Balance:</div>
              <div className="text-xs text-brand-primary">
                {card?.card_balance}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Status:</div>
              <div className="text-xs text-brand-primary">
                {card?.status}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Date Added:</div>
              <div className="text-xs text-brand-primary">
                {card?.created_at}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">
                Last Modified At:
              </div>
              <div className="text-xs text-brand-primary">
                {card?.updated_at}
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
