import { IFee } from "@/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface ViewChargeSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  charge: IFee | undefined;
  isLoading: boolean;
}

export const ViewChargeSheet = ({
  open,
  onOpenChange,
  charge,
  isLoading,
}: ViewChargeSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Charge Details</SheetTitle>
        </SheetHeader>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex mt-8 flex-col space-y-4 w-full">
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600">Service:</div>
              <div className="text-xs text-brand-primary">
                {charge?.name}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Active:</div>
              <div className="text-xs text-brand-primary">
                {charge?.is_active ? "Yes" : "No"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Charge:</div>
              <div className="text-xs text-brand-primary">
                {charge?.charge}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Cap:</div>
              <div className="text-xs text-brand-primary">
                {charge?.cap}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Percentage:</div>
              <div className="text-xs text-brand-primary">
                {charge?.percentage}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Service:</div>
              <div className="text-xs text-brand-primary">
                {charge?.description}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Date Added:</div>
              <div className="text-xs text-brand-primary">
                {charge?.created_at}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">
                Last Modified At:
              </div>
              <div className="text-xs text-brand-primary">
                {charge?.updated_at}
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
