import Navbar from '@/components/Navbar'
import React from 'react'
import { ApprovedTable } from '@/components/Table'
import { ApprovedTableDao } from '@/components/DaoTable'

function Approved() {

    const invoices = [
       
        {
          invoice: "INV005",
          address:"dnbhcghunwjkme",
          paymentStatus: "Paid",
          totalAmount: "$550.00",
          paymentMethod: "PayPal",
          status:"Pending"
        },
        {
          invoice: "INV006",
          address:"dnbhcghunwjkme",
          paymentStatus: "Pending",
          totalAmount: "$200.00",
          paymentMethod: "Bank Transfer",
          status:"Pending"
        },
        {
          invoice: "INV007",
          address:"dnbhcghunwjkme",
          paymentStatus: "Unpaid",
          totalAmount: "$300.00",
          paymentMethod: "Credit Card",
          status:"Pending"
        },
      ]

  return (
    <div>
      <Navbar space1='Requests' space2="Approved"/>

      <div className="aprroved px-10 pt-5 font-bold text-white text-xl">
        Approved Loans
      </div>

      <div className="all p-10 w-screen flex justify-center items-center h-max">
        <ApprovedTableDao invoices={invoices}/>
      </div>
    </div>
  )
}

export default Approved
