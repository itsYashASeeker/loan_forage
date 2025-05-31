import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function CurrentCards() {
  return (
    <div className="bg-primary text-white p-2">
    <Card className="w-full bg-primary border-0 text-white px-28 rounded-none">
      <CardHeader className="px-0">
        <CardTitle className="text-4xl text-white p-0">Ongoing Loans</CardTitle>
        {/* <CardDescription>Get the loan on one click...</CardDescription> */}
      </CardHeader>
      <CardContent className="px-0">
          <div className="w-full items-center gap-4 flex flex-col">
            <div className="flex flex-row w-full justify-between">
             <div className=" flex flex-row gap-3">
                <h1>Loan Amount: </h1>
                <h2 className="text-green-500"> $12345</h2>
             </div>
             <div className=" flex flex-row gap-3">
                <h1><b>Due Dates: </b></h1>
                <h2 className="text-white"> 02/11/23</h2>
             </div>
            </div>
            <div className="flex w-full justify-end">
            <div className=" flex flex-row gap-3">
                <h1><b>Due Ammount: </b></h1>
                <h2 className="text-red-500"> $ 10000</h2>
             </div>
            </div>
          </div>
      </CardContent >
      <CardFooter className="flex w-full justify-end px-0 ">
        <Button className="border ">Get Loan</Button>
      </CardFooter>
    </Card>
    <div className="w-full flex justify-center items-center mb-1">

<div className="w-1/5 border border-slate-600 justify-center items-center"></div>
</div>
    </div>
  )
}
