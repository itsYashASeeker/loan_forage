"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

interface Invoice {
  invoice: string;
  address: string;
  paymentStatus: string;
  paymentMethod: string;
  totalAmount: string;
  status: string;
}

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"


interface ApprovedTableProps {
  invoices: Invoice[];
}

export function ApprovedTableDao({ invoices }: ApprovedTableProps) {
  const [invoicess, setInvoice] = useState<Invoice[]>(Array.isArray(invoices) ? invoices : []);
  const [visibleOptions, setVisibleOptions] = useState<string | null>(null);

  const handleStatusChange = (invoiceId: string, action: 'approve' | 'reject') => {
    setInvoice((prevInvoices) =>
      prevInvoices.map((invoice) =>
        invoice.invoice === invoiceId
          ? { ...invoice, status: action === 'approve' ? 'Approved' : 'Rejected' }
          : invoice
      )
    );
    setVisibleOptions(null);
  };

  const toggleOptions = (invoiceId: string) => {
    setVisibleOptions((prev) => (prev === invoiceId ? null : invoiceId));
  };

  const { toast } = useToast()
  return (
    <div className="text-white ">
      <Table className="text-white border rounded-md w-fit m-12">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="min-w-52 py-2 p-3">Wallet Address</TableHead>
            <TableHead className="min-w-52 text-left py-2 p-3">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoicess.length > 0 ? (
            invoicess.map((invoice,index) => (
              <TableRow key={invoice.invoice} className="hover:bg-transparent">
                <div
              key={index}
              className="user-card cursor-pointer hover:bg-transparent"

            >
            <Dialog>
              <DialogTrigger asChild>
                <Button className='w-max h-max border-none p-0'>
                <TableCell className="font-medium p-3  ">{invoice.address}</TableCell>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-primary border text-white">
                <DialogHeader>
                  <DialogTitle>{invoice.address.slice(1,5)+"..."}</DialogTitle>
                  <DialogDescription className='text-sm text-gray-300 py-2'>
                    <b>Past-Qualifications: </b>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores error aut velit provident magnam praesentium facere, quaerat harum rem maxime excepturi eligendi, mollitia doloremque eum nam ipsam. Excepturi quam ratione voluptates, accusantium earum deleniti!
                  </DialogDescription>
                </DialogHeader>
                <div className="buttons flex justify-between">
                    <div className="cardbut">
                      Forage-Card-Score: 20
                    </div>
                    <div className="cardbut">
                      Votes : 20  
                    </div>
                </div>
                <div className='p-0 flex flex-col'>
                    <div className="w-full">
                        <Button className="w-full text-[1rem] border">Download Documents</Button>
                    </div>
            


                </div>
            
              </DialogContent>
            </Dialog>
              {/* <UserCard userId={user.userId} /> */}
            </div>
                
                <TableCell className="text-left p-3">
                  {invoice.status === 'Pending' ? (
                    <div className="relative inline-block text-left">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => toggleOptions(invoice.invoice)}
                      >
                        Pending
                      </button>
                      {visibleOptions === invoice.invoice && ( 
                        <div className="absolute z-10 mt-1 w-32 bg-white shadow-lg rounded-md">
                          <div className="flex flex-col">
                            <button
                              onClick={() => handleStatusChange(invoice.invoice, 'approve')}
                              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleStatusChange(invoice.invoice, 'reject')}
                              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                            >
                              Reject
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className={`${invoice.status === 'Approved' ? 'text-green-500' : 'text-red-500'}`}>
                      {invoice.status}
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2} className="text-center">
                No invoices available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
