/* eslint-disable react/prop-types */
import React from "react";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative w-full overflow-auto">
        <table ref={ref} className={`w-full rounded-xl overflow-clip caption-bottom text-sm ${className}`} {...props} />
      </div>
    );
  }
);

Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  return (
    <thead
      ref={ref}
      className={`w-full bg-brand-primary text-[#fff] rounded-2xl text-sm' ${className}`}
      {...props}
    />
  );
});

TableHeader.displayName = "TableHead";
const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  return <tbody ref={ref} className={`w-full text-sm  bg-[#D1DFFE80]  ${className}`} {...props} />;
});

TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  return <tfoot ref={ref} className={`w-full caption-bottom text-sm ${className}`} {...props} />;
});

TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.TdHTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => {
  return (
    <tr
      ref={ref}
      className={` [&:has([role=checkbox])]:pr-0 ${className}`}
      {...props}
    />
  );
});
TableRow.displayName = "TableRow";
const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  return (
    <td
      ref={ref}
      className={`px-6 py-3 font-semibold align-middle  ${className}`}
      {...props}
    />
  );
});
TableCell.displayName = "TableCell";
const TableHead = React.forwardRef<
  HTMLTableHeaderCellElement,
  React.HTMLAttributes<HTMLTableHeaderCellElement>
>(({ className, ...props }, ref) => {
  return (
    <th
      ref={ref}
      className={`px-6 py-3 text-start font-semibold  capitalize ${className}`}
      {...props}
    />
  );
});
TableHead.displayName = "TableCell";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableCell,
  TableHead,
  TableRow

}
