import { DataTable } from "@/shared/UI/Table/common-table";
import StatusBadge from "@/shared/UI/Table/status-badge";
import { PageTitle } from "@/shared/UI/general-page-title";
import { Status } from "@/shared/constants";
import { ColumnDef } from "@tanstack/react-table";
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { useGetDocuments } from "../queries";
import { ComplianceDocument } from "../types";
import { format } from "date-fns";
import { ViewComplianceDocument } from "../components/view-compliance-document";

const Compliance = () => {
  const { documents: compliance } = useGetDocuments();
  const [viewDocumentSheet, setViewDocumentSheet] = useState(false);
  const [selectedDocument, setSelectedDocument] =
    useState<string|number | null>(null);

  const handleOpenViewSheet = (id: string | number) => {
    setSelectedDocument(id);
    setViewDocumentSheet(true);
  };
  const columns: ColumnDef<ComplianceDocument>[] = [
    {
      header: "S/N",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "user",
      cell({ row }) {
        const user = row.original.user;
        return `${user?.first_name || ""} ${user?.last_name || ""}`;
      },
    },
    {
      header: "Email",
      accessorKey: "user_email",
    },
    {
      header: "Document Type",
      accessorKey: "document_type",
    },
    {
      header: "Date Submitted",
      accessorKey: "created_at",
      cell({ row }) {
        return format(new Date(row.original.created_at), "dd/MM/yyyy");
      },
    },
    {
      header: "Status",
      accessorKey: "user.kyc_verified",
      cell({ row }) {
        const status =
          row.original.user?.kyc_verified == 1 ? "approved" : "pending";
        return <StatusBadge value={status as ReactNode as Status} />;
      },
    },
    {
      header: "Action",
      accessorKey: "id",
      cell({ row }) {
        return (
          <button
            onClick={() => {
              handleOpenViewSheet(row?.original?.id);
            }}
            className="text-brand-primary"
          >
            View
          </button>
        );
      },
    },
  ];
  return (
    <div className="">
      <div className="space-y-10">
        <PageTitle title="KYCS" />
        <DataTable columns={columns} data={compliance?.data || []} />
      </div>
      <ViewComplianceDocument
        id={selectedDocument as string}
        open={viewDocumentSheet}
        onOpenChange={setViewDocumentSheet}
      />
    </div>
  );
};

export default Compliance;
