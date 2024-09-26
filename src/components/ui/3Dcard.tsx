import React from "react";
import { PinContainer } from "./3Dpin";
import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card = ({ image, title, description }: CardProps) => {
  return (
    <div className="h-[25rem] sm:w-96 w-[80vw] flex items-center justify-center bg-lime-400">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="relative overflow-hidden flex basis-full flex-col  p-4 tracking-tight  sm:w-96 w-[80vw] h-[20vh] lg:h-[30vh]  ">
          <div
            className="relative w-full h-full overflow-hidden lg:rounded-xl"
            style={{ backgroundColor: "#13162D" }}
          >
            <img src="/bg.png" alt="bgimg" />
            <Image src={image} fill alt="cover" className="object-cover" />
          </div>
        </div>
        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          {title}
        </h1>
        <p
          className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
          style={{
            color: "#BEC1DD",
            margin: "1vh 0",
          }}
        >
          {description}
        </p>
      </PinContainer>
    </div>
  );
};

export default Card;
