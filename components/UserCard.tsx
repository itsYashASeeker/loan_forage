import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "./logo.svg"

// Define the prop types
interface CardComponentProps {
//   image: StaticImageData;  // If you're using Next.js' Image optimization, this should be StaticImageData.
  userId: string;
}

const UserCard: React.FC<CardComponentProps> = ({ userId }) => {
// const UserCard = () => {
  const [count, setCount] = useState(10);

  const giveVote = () => {
    setCount(count + 1);
  };

  return (
    <div className="m-1 w-full">
      <div>
        <Card className="w-[350px] bg-primary text-white py-4 px-4 rounded-lg flex justify-start items-start flex-col gap-3 cursor-pointer">
          <CardHeader className=" p-0">
            {/* <CardTitle className="font-extralight text-clip text-lg flex"> */}
              <div className="justify-self-start">
                {userId.slice(1,5)+"..."}
              </div>
          </CardHeader>

          <CardContent className="flex justify-center items-center p-0">
            
            <div className="w-full  text-white border-white text-balance text-justify text-wrap" >
                <b>Past-Qualifcations:</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, dicta enim aperiam assumenda minus, totam, amet tempore suscipit aliquid dolore voluptas quo mollitia adipisci ratione necessitatibus culpa commodi quia reiciendis?m


            </div>
          </CardContent>

          <CardFooter className="w-full flex flex-col justify-between text-lg gap-2 p-0">
              <div
                className="w-full justify-start bg-primary text-start rounded-lg text-sm py-2 px-3 border  border-slate-400"
                
              >
                Forage-Card-Score: {count}
              </div>
              <div className="w-full flex justify-end ">
                <div className="border border-slate-400 rounded-xl px-2 py-2 text-sm">Votes: {count}</div>
              </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default UserCard;

