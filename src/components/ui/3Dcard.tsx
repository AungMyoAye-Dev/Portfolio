import React from "react";
import { PinContainer } from "./3Dpin";
import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  iconList?: string[];
}

const Card = ({ image, title, description, link, iconList }: CardProps) => {
  return (
    <div className="h-[25rem] lg:min-h-[32.5rem] sm:w-96 w-[80vw] flex items-center justify-center ">
      <PinContainer title={link} href={link}>
        <div className="relative overflow-hidden flex basis-full flex-col  p-4  sm:w-96 w-[80vw] h-[20vh]  lg:h-[30vh]  ">
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

        <div className="flex justify-between py-2">
          <div className="flex justify-center">
            {iconList?.map((icon, i) => (
              <div
                key={i}
                className="relative size-8 border border-white/[.2] rounded-full flex justify-center items-center"
                style={{ transform: `translateX(${-5 * i + 2}px)` }}
              >
                <Image src={icon} width={24} height={24} alt="icons" />
              </div>
            ))}
          </div>
          <div>
            <a
              href="#"
              className="flex lg:text-xl md:text-xs text-sm text-purple"
            >
              Check Live Site
            </a>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default Card;
