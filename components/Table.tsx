"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

interface Invoice {
  invoice: string;
  paymentStatus: string;
  paymentMethod: string;
  totalAmount: number;
  status: string;
}

interface ApprovedTableProps {
  invoices: Invoice[]; // Specify the expected type for the invoices prop
}

export function ApprovedTable({ invoices }: any) {
  // Ensure the invoices prop is an array and handle cases where it might not be
  const [invoicess, setInvoice] = useState<any>(Array.isArray(invoices) ? invoices : []);

  return (
    <div className="text-white">

    <Table className="text-white border rounded-md   ">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          {/* <TableHead>Method</TableHead> */}
          <TableHead className="text-right">Amount Asked</TableHead>
          <TableHead className="text-right">Amount Assigned</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoicess.length > 0 ? (
          invoicess.map((invoice:any) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              {/* <TableCell>{invoice.paymentMethod}</TableCell> */}
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              <TableCell className={`text-right ${invoice.status === 'Approved' ? 'text-green-500' : ''}`}>
                {invoice.status}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="text-center">
              No invoices available.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      {/* Uncomment if you need a footer
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
      */}
    </Table>
    </div>
  );
}
