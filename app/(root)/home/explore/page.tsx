"use client";
import Navbar from '@/components/Navbar';
import UserCard from '@/components/UserCard';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
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


function ExploreUser() {
  const [usest, setUsest] = useState<any>([
    { name: "Yash", userId: "decfdwjiesn" },
    { name: "Chauhan", userId: "aosidudyhd" },
    { name: "Dubey", userId: "losiducydgshjkw" },
    { name: "Dubey", userId: "losiducydgshjkw" },
    // { name: "Dubey", userId: "losiducydgshjkw" },
  ]);

  const pathname = usePathname();
  console.log(pathname)
  const { toast } = useToast()

  return (
    <div>
      <Navbar space1="Explore" space2="GetLoans" />
      <div className=" w-screen p-10 flex flex-wrap gap-1 justify-center items-center">
      {/* <div className="inner p-10 grid grid-cols-1 sm:gr id-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
        {usest &&
          usest.map((user: { name: string, userId: string }, index: number) => (
            // <Link href={`${pathname}/${user.userId}`} >
            <div
              key={index}
              className="user-card cursor-pointer"

            >
                <UserCard userId={user.userId} />
        
              {/* <UserCard userId={user.userId} /> */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default ExploreUser;
