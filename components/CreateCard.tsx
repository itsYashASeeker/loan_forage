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


export function FullCards() {
  return (
    <div className="bg-primary text-white p-2">
    <Card className="w-full bg-primary border-0 text-white px-28 rounded-none ">
      <CardHeader className="px-0">
        <CardTitle className="text-4xl text-white p-0">Create Loan</CardTitle>
        <CardDescription>Get the loan on one click...</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Enter the Amount</Label>
              <Input id="name" placeholder="Amount" />
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex w-full justify-end px-0">
        <Button className="border ">Get Loan</Button>
      </CardFooter>
    </Card>
    <div className="w-full flex justify-center items-center mb-1">

<div className="w-1/5 border border-slate-600 justify-center items-center"></div>
</div>
    </div>
  )
}
