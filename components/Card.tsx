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
  image: StaticImageData;  // If you're using Next.js' Image optimization, this should be StaticImageData.
  userId: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ image, userId }) => {
  const [count, setCount] = useState(15);

  const giveVote = () => {
    setCount(count + 1);
  };

  return (
    <div className="m-1">
      <div>
        <Card className="w-[350px] bg-primary border py-4">
          <CardHeader className="pt-0">
            <CardTitle className="font-extralight text-clip text-lg flex justify-between">
              <div className="justify-self-start text-blue-50">
                Forage Card
              </div>
              <div>
                <Image src={logo} alt="logo" width={30} />
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex justify-center items-center">
            <Image src={image} alt="user-uploaded-image" width={100} />
          </CardContent>

          <CardFooter className="w-full flex flex-col gap-2 pb-0">
            <div className="w-full flex flex-row justify-between text-lg">
              <Button
                className="w-full justify-start bg-primary text-start p-0 text-sm"
                
              >
                Forage-Card-Score: {count}
              </Button>
              <div className="w-full flex justify-end">
                <Button>Votes: {count}</Button>
              </div>
            </div>

            <div className="text-white w-full text-start text-sm">
              {userId.slice(0, 5) + "...."}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CardComponent;
