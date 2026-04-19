import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import CircularProgress from "@/shared/CircularProgress";
import { toast } from "sonner";
import { useGetDocumentResource, useGetSingleDocument } from "../queries";
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
  const { getDocumentResource, isLoading: resourceLoading } =
    useGetDocumentResource(id || "");
  const { document: documentDetails, isLoading: documentLoading } = useGetSingleDocument(
    id || ""
  );

  const handleDownloadResource = async () => {
    if (!id) return;

    try {
      const blob = await getDocumentResource(id);
      const blobUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = `${documentDetails?.data?.document_type || "kyc-document"}-${id}`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not download document"
      );
    }
  };

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
                {documentDetails?.data?.user?.first_name}{" "}
                {documentDetails?.data?.user?.last_name}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600">Username:</div>
              <div className="text-xs text-brand-primary">
                {documentDetails?.data?.user?.first_name}{" "}
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
                {documentDetails?.data?.user?.email || documentDetails?.data?.user_email}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Document Type:</div>
              <div className="text-xs text-brand-primary">
                {documentDetails?.data?.document_type || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Date of Birth:</div>
              <div className="text-xs text-brand-primary">
                {documentDetails?.data?.user?.dob || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Gender</div>
              <div className="text-xs text-brand-primary">
                {documentDetails?.data?.user?.gender || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Country</div>
              <div className="text-xs text-brand-primary">
                {documentDetails?.data?.user?.country || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">Address:</div>
              <div className="text-xs text-brand-primary">
                {documentDetails?.data?.user?.address || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">House Number:</div>
              <div className="text-xs text-brand-primary">
                {documentDetails?.data?.user?.house_no || "N/A"}
              </div>
            </div>
            <div className="border-b pb-1 flex items-center justify-between">
              <div className=" text-gray-600 text-sm">KYC Verified</div>
              <div className="text-xs text-brand-primary">
                {documentDetails?.data?.user?.kyc_verified ? "Yes" : "No"}
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
                {documentDetails?.data?.created_at
                  ? new Date(documentDetails?.data?.created_at).toLocaleDateString(
                      "en-GB"
                    )
                  : "N/A"}
              </div>
            </div>
            <button
              onClick={handleDownloadResource}
              disabled={resourceLoading || !id}
              className="border rounded h-24 px-4 border-dashed w-[90%] m-auto mt-12 flex flex-col justify-center items-center disabled:opacity-60"
              type="button"
            >
              <div className="rounded-full p-3 w-max bg-brand-primary">
                {resourceLoading ? (
                  <CircularProgress size={18} color="white" />
                ) : (
                  <LuDownload className="text-white" />
                )}
              </div>
              <p className="text-xs whitespace-wrap mt-2 text-brand-primary font-medium">
                {resourceLoading
                  ? "Preparing download..."
                  : `Download verification image`}
              </p>
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
