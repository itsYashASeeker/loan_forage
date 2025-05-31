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


function AdminPanel() {
  const [usest, setUsest] = useState<any>([
    { name: "Yash", userId: "decfdwjiesn" },
    { name: "Chauhan", userId: "aosidudyhd" },
    { name: "Dubey", userId: "losiducydgshjkw" },
    { name: "Dubey", userId: "losiducydgshjkw" },
    { name: "Dubey", userId: "losiducydgshjkw" },
  ]);

  const pathname = usePathname();
  console.log(pathname)
  const { toast } = useToast()

  return (
    <div>
      <Navbar space1="Requests" space2="Approved" />
      <div className=" w-screen p-10 flex flex-wrap gap-1 justify-center items-center">
      {/* <div className="inner p-10 grid grid-cols-1 sm:gr id-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
        {usest &&
          usest.map((user: { name: string, userId: string }, index: number) => (
            // <Link href={`${pathname}/${user.userId}`} >
            <div
              key={index}
              className="user-card cursor-pointer"

            >
            <Dialog>
              <DialogTrigger asChild>
                <Button className='w-max h-max border-none p-0'>
                <UserCard userId={user.userId} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-primary border text-white">
                <DialogHeader>
                  <DialogTitle>{user.userId.slice(1,5)+"..."}</DialogTitle>
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
                  <div className="Req flex flex-row justify-between">
                    <div className="txt">
                      Requested Ammount: 
                    </div>
                    <div className="amt text-green-500"> $ 12345</div>
                  </div>
                  <div className="amtassg flex justify-center items-center py-2 gap-2 ">
                    <div className="Label">Ammount: </div>
                    <Input  id="username"
                    placeholder='Enter Ammount to be assigned'
                    />
                  </div>


                </div>
                <DialogFooter>
                  <Button type="submit" className='border' onClick={() => {
                    toast({
                      variant: "default", // You can use a custom variant or just style it directly
                      description: "Loan has been assigned!!",
                      className: "bg-primary text-white", 
                    })
                  }}>Submit</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
              {/* <UserCard userId={user.userId} /> */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default AdminPanel;
