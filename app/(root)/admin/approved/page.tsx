import Navbar from '@/components/Navbar'
import React from 'react'
import { ApprovedTable } from '@/components/Table'

function Approved() {

    const invoices = [
       
        {
          invoice: "INV005",
          paymentStatus: "Paid",
          totalAmount: "$550.00",
          paymentMethod: "PayPal",
          status:"Approved"
        },
        {
          invoice: "INV006",
          paymentStatus: "Pending",
          totalAmount: "$200.00",
          paymentMethod: "Bank Transfer",
          status:"Approved"
        },
        {
          invoice: "INV007",
          paymentStatus: "Unpaid",
          totalAmount: "$300.00",
          paymentMethod: "Credit Card",
          status:"Approved"
        },
      ]

  return (
    <div>
      <Navbar space1='Requests' space2="Approved"/>

      <div className="aprroved px-10 pt-5 font-bold text-white text-xl">
        Approved Loans
      </div>

      <div className="all p-10">
        <ApprovedTable invoices={invoices}/>
      </div>
    </div>
  )
}

export default Approved
