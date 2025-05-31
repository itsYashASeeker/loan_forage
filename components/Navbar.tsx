"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavbarProps {
  space1: string;
  space2: string;
}

const Navbar: React.FC<NavbarProps> = ({ space1, space2 }) => {
  const pathname = usePathname();
  console.log(pathname);

  // Extract the last part of the pathname
  const lastPart = pathname?.split('/').filter(Boolean).pop();
  const SeclastPart = pathname?.split('/')[1];
  console.log(SeclastPart)
  

  return (
    <div className="top-0 left-0 w-screen h-max flex justify-center text-white cursor-pointer">
      <div className="flex justify-between w-1/2 px-5 py-4 rounded-b-2xl border border-t-0">
        <div className="name text-xl font-bold">Loan-Forage</div>
        <div className="menu flex flex-row gap-2">
          {/* Navigate to the URL associated with space1 */}
          <Link href={`/${SeclastPart}/${space1.toLowerCase()}`} passHref>
            <div className={`approved ${lastPart === space1.toLowerCase() ? 'text-yellow-400' : ''}`}>
              {space1}
            </div>
          </Link>
          |
          {/* Navigate to the URL associated with space2 */}
          <Link href={`/${SeclastPart}/${space2.toLowerCase()}`} passHref>
            <div className={`pending ${lastPart === space2.toLowerCase() ? 'text-yellow-400' : ''}`}>
              {space2}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
