import { CardRequest } from "@/lib/api/type";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useGetSingleCardDetails } from "@/pages/customers/queries";

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
  const { cardDetails, transactiondetailsLoading } = useGetSingleCardDetails(
    card?.card_reference || ""
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
                {cardDetails?.data?.card_name}
              </div>
            </div>
            {/* <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Email:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.data?.email}
              </div>
            </div> */}
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Card Type:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.data?.card_type}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Brand:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.data?.brand || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Pan:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.data?.card_number}
              </div>
            </div>
            {/* <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Last Four Digits:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.data?.last_four_number || "N/A"}
              </div>
            </div> */}
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Expiry:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.data?.expiry_month}/
                {cardDetails?.data?.expiry_year}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Currency:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.data?.card_currency}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Balance:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.data?.balance}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Status:</div>
              <div className="text-xs text-brand-primary">
                {cardDetails?.data?.is_active ? "Active" : "Inactive"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Date Added:</div>
              <div className="text-xs text-brand-primary">
                {new Date(
                  Number(cardDetails?.data?.created_at) * 1000
                ).toLocaleDateString()}
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
