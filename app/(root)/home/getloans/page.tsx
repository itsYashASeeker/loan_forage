"use client"

import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "./logo.svg"
import Ima from "./image.png"
import CardComponent from "@/components/Card";
import UserCard from "@/components/UserCard";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { FullCards } from "@/components/CreateCard";
import { CurrentCards } from "@/components/CurrentCard";

  

export default function Home() {

    const [count,setcount] = useState(0)

    const givevote= () => {
        setcount(count+1)
    }
  return (
    <div className="h-screen w-screen top-0 left-0 overflow-x-hidden">
        <Navbar space1 = "Explore" space2="GetLoans"/>

        <div className="my-1 text-white p-2 flex flex-col gap-2">
            <FullCards/>
            
            <CurrentCards/>
            
        </div>
        
       {/* <UserCard userId="0x35cyghudnj..."/>
       <Card
       image={Ima}
       userId="hcdikmdnwshbd"

       /> */}
    </div>
  );
}
