/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } ;
import CircularProgress from "../../CircularProgress";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../table-blocks/table";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { IPaginationLink } from "@/lib/api/type";

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  loading?: boolean;
  pagination?: PaginationState;
  pageCount?: number;
  currentPage?: number;
  paginationLinks?: IPaginationLink[];
  setPagination?: Dispatch<SetStateAction<PaginationState>>;
}

export const DataTable = <T,>({
  columns,
  data,
  loading,
  pagination,
  pageCount,
  currentPage,
  paginationLinks,
  setPagination,
}: DataTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    pageCount,

    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  });
  // const getPages = () => {};
  return (
    <div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header?.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header?.column?.columnDef?.header,
                            header?.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHeader>

        <TableBody>
          {table?.getRowModel()?.rows?.length ? (
            table?.getRowModel()?.rows.map((row) => {
              return (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          ) : loading ? (
            <TableRow>
              {" "}
              <TableCell colSpan={columns?.length}>
                <div className="mx-auto w-max">
                  <CircularProgress />{" "}
                </div>
              </TableCell>
            </TableRow>
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns?.length}
                className="h-24 text-black text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableCell colSpan={columns?.length}>
            <div className="flex justify-between pr-4">
              <Button variant={"outline"}>Prev</Button>
              <div className="flex gap-4 max-w-1/2">
                {paginationLinks?.slice(1, -2).map((data) => {
                  return (
                    <Button
                      onClick={() => {
                        setPagination?.((prev) => {
                          return {
                            ...prev,
                            pageIndex: data.label as number,
                          };
                        });
                      }}
                      variant={data.active ? "outline" : "plain"}
                    >
                      {data.label}
                    </Button>
                  );
                })}
              </div>
              <Button
                variant={"outline"}
                onClick={() =>
                  setPagination?.((prev) => ({
                    ...prev,
                    pageIndex: prev.pageIndex + 1,
                  }))
                }
              >
                Next
              </Button>
            </div>
          </TableCell>
        </TableFooter>
      </Table>
    </div>
  );
};
