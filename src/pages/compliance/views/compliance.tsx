import { compliance } from "@/mockdata";
import { DataTable } from "@/shared/Table/common-table";
import StatusBadge from "@/shared/Table/status-badge";
import { PageTitle } from "@/shared/UI/general-page-title";
import { ICompliance } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const Compliance = () => {
  const columns: ColumnDef<ICompliance>[] = [
    {
      header: "S/N",
      accessorKey: "SN",
    },
    {
      header: "name",
      accessorKey: "name",
    },
    {
      header: "Date Submitted",
      accessorKey: "date_submitted",
    },
    {
      header: "Date Approved",
      accessorKey: "date_approved",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell(row) {
        return <StatusBadge value={row.getValue()! as ReactNode} />;
      },
    },
    {
      header: "Action",
      accessorKey: "SN",
      cell(row) {
        return (
          <Link to={`/dashboard/compliance/${row.getValue()}`}>
            {" "}
            <button className="text-brand-primary">Edit</button>
          </Link>
        );
      },
    },
  ];
  return (
    <div className="">
      <div className="space-y-10">
        <PageTitle title="KYCS" />
        <DataTable columns={columns} data={compliance} />
      </div>
    </div>
  );
};

export default Compliance;
