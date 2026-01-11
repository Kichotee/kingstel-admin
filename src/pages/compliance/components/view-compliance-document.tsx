import { CardRequest } from "@/lib/api/type";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useGetSingleCardDetails } from "@/pages/customers/queries";
import { useGetSingleDocument } from "../queries";
import { LuDownload } from "react-icons/lu";

interface ViewCardDetailsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  id: string | number | undefined;
}

export const ViewComplianceDocument = ({
  open,
  onOpenChange,
  id,
}: ViewCardDetailsSheetProps) => {
  const { document, isLoading: documentLoading } = useGetSingleDocument(
    id || ""
  );
  console.log(document);
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>KYC Details</SheetTitle>
        </SheetHeader>

        {documentLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex mt-8 flex-col space-y-4 w-full">
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600">Name:</div>
              <div className="text-xs text-brand-primary">
                {document?.data?.user?.first_name}{" "}
                {document?.data?.user?.last_name}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600">Username:</div>
              <div className="text-xs text-brand-primary">
                {document?.data?.user?.first_name}{" "}
              </div>
            </div>
            {/* <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Email:</div>
              <div className="text-xs text-brand-primary">
                {document?.data?.email}
              </div>
            </div> */}
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Email</div>
              <div className="text-xs text-brand-primary">
                {document?.data?.user?.email || document?.data?.user_email}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Document Type:</div>
              <div className="text-xs text-brand-primary">
                {document?.data?.document_type || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Date of Birth:</div>
              <div className="text-xs text-brand-primary">
                {document?.data?.user?.dob || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Gender</div>
              <div className="text-xs text-brand-primary">
                {document?.data?.user?.gender || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Country</div>
              <div className="text-xs text-brand-primary">
                {document?.data?.user?.country || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Address:</div>
              <div className="text-xs text-brand-primary">
                {document?.data?.user?.address || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">House Number:</div>
              <div className="text-xs text-brand-primary">
                {document?.data?.user?.house_no || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">KYC Verified</div>
              <div className="text-xs text-brand-primary">
                {document?.data?.user?.kyc_verified ? "Yes" : "No"}
              </div>
            </div>
            {/* <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Last Four Digits:</div>
              <div className="text-xs text-brand-primary">
                {document?.data?.last_four_number || "N/A"}
              </div>
            </div> */}
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Created At:</div>
              <div className="text-xs text-brand-primary">
                {document?.data?.created_at
                  ? new Date(document?.data?.created_at).toLocaleDateString(
                      "en-GB"
                    )
                  : "N/A"}
              </div>
            </div>
            <div className="border rounded h-24 px-4 border-dashed w-[90%] m-auto mt-12 flex flex-col justify-center items-center">
              <button className="flex group flex-col justify-center items-center">
                  <div className="rounded-full group-hover:bg-brand-primary/70  duration-200 p-3 w-max bg-brand-primary">
                    <LuDownload className="text-white" />
                  </div>
                    <p className="text-xs whitespace-wrap mt-2 text-brand-primary font-medium"> Download {document?.data?.document_type || "N/A"}</p>
              </button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
