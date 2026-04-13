import { CardRequest } from "@/lib/api/type";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useGetSingleCardDetails } from "@/pages/customers/queries";
import { formatCurrencyNumber } from "@/lib/format-currency";

interface ViewCardDetailsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  card: CardRequest | undefined;
  isLoading: boolean;
  userEmail: string;
}

export const ViewCardDetailsSheet = ({
  open,
  onOpenChange,
  card,
  isLoading,
  userEmail,

}: ViewCardDetailsSheetProps) => {
  const { cardDetails, transactiondetailsLoading } = useGetSingleCardDetails(
    card?.card_reference || "",
    userEmail
  );
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Card Details</SheetTitle>
        </SheetHeader>

        {transactiondetailsLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex mt-8 flex-col space-y-4 w-full">
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600">Name:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.cardDetails?.name_on_card || "N/A"}
              </div>
            </div>
            {/* <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Email:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.cardDetails?.email}
              </div>
            </div> */}
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Card Type:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.cardDetails?.card_type}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Brand:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.cardDetails?.brand || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Pan:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.cardDetails?.pan || "N/A"}
              </div>
            </div>
            {/* <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Last Four Digits:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.cardDetails?.last_four_number || "N/A"}
              </div>
            </div> */}
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Last Four:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.cardDetails?.last_four || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Currency:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.cardDetails?.currency}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Balance:</div>
              <div className="text-xs text-brand-primary">
                {formatCurrencyNumber(Number(cardDetails?.cardDetails?.card_balance))}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Status:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.cardDetails?.status}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Date Added:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.cardDetails?.created_at
                  ? new Date(cardDetails.cardDetails.created_at).toLocaleDateString()
                  : "N/A"}
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
