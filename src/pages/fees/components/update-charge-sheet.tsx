import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IFee } from "@/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useForm } from "react-hook-form";
import { useMemo } from "react";

interface UpdateChargeSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  charge: IFee | undefined;
  isLoading: boolean;
  onSubmit: (data: Partial<IFee>) => Promise<void>;
  isPending: boolean;
  onOpenModalChange: (open: number) => void;
}

export const UpdateChargeSheet = ({
  open,
  onOpenChange,
  charge,
  isLoading,
  onSubmit,
  isPending,
  onOpenModalChange,
}: UpdateChargeSheetProps) => {

  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Partial<IFee>>({
    defaultValues: useMemo(() => ({
      name: charge?.name || "",
      charge: charge?.charge || "",
      percentage: charge?.percentage || "",
      cap: charge?.cap || null,
      currency: charge?.currency || "",
      is_active: charge?.is_active || true,
      description: charge?.description || "",
      service_type: charge?.service_type || "",
    }), [charge]),
  });

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      onOpenModalChange(0);
      reset();
    }
    onOpenChange(isOpen);
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent className="sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Update Charge Details</SheetTitle>
        </SheetHeader>

        {isLoading ? (
          <p className="text-center py-4">Loading...</p>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex mt-8 flex-col space-y-4 w-full"
          >
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Service Name</label>
              <Input
                placeholder="Service name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Charge</label>
              <Input
                placeholder="Charge amount"
                type="number"
                {...register("charge")}
              />
              {errors.charge && (
                <p className="text-xs text-red-500">{errors.charge.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Percentage</label>
              <Input
                placeholder="Percentage"
                type="number"
                step="0.01"
                {...register("percentage")}
              />
              {errors.percentage && (
                <p className="text-xs text-red-500">
                  {errors.percentage.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Cap</label>
              <Input
                placeholder="Cap amount"
                type="number"
                {...register("cap")}
              />
              {errors.cap && (
                <p className="text-xs text-red-500">{errors.cap.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Currency</label>
              <Input
                placeholder="Currency code"
                {...register("currency")}
              />
              {errors.currency && (
                <p className="text-xs text-red-500">
                  {errors.currency.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Service Type</label>
              <Input
                placeholder="Service type"
                {...register("service_type")}
              />
              {errors.service_type && (
                <p className="text-xs text-red-500">
                  {errors.service_type.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Description</label>
              <Input
                placeholder="Description"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-xs text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* <div className="pt-4 space-y-2">
              <p className="text-xs text-gray-500">
                Date Added: {charge?.created_at}
              </p>
              <p className="text-xs text-gray-500">
                Last Modified: {charge?.updated_at}
              </p>
            </div> */}

            <Button
              type="submit"
              loading={isPending}
              className="w-full bg-brand-primary hover:bg-brand-primary/90"
            >
              Update Charge Details
            </Button>
          </form>
        )}
      </SheetContent>
    </Sheet>
  );
};
