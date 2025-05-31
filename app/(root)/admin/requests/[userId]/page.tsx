// pages/admin/[userId].tsx
"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const UserLoanDetails = () => {
  const pathname = usePathname();
  
  // Extract the userId from the pathname
  const userId = pathname.split('/').filter(Boolean).pop(); // Gets the last part of the URL
  const [loanDetails, setLoanDetails] = useState<any>(null);

  useEffect(() => {
    if (userId) {
      // Simulate fetching loan details based on the userId (slug)
      // Replace with your API call or logic to fetch loan data for the user
      setLoanDetails({
        userId,
        loanStatus: 'Approved',
        loanAmount: 5000,
        approvalDate: '2023-10-01',
      });
    }
  }, [userId]);

  if (!loanDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl">Loan Details for User: {loanDetails.userId}</h1>
      <p>Loan Status: {loanDetails.loanStatus}</p>
      <p>Loan Amount: ${loanDetails.loanAmount}</p>
      <p>Approval Date: {loanDetails.approvalDate}</p>
    </div>
  );
};

export default UserLoanDetails;
