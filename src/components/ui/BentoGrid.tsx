"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBackground";
import Image from "next/image";
import { Button } from "./MovingBorder";
import { useState } from "react";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import animationData from "@/data/confettie.json";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid  grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  image,
  titleClassName,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);
  //  Email copy function
  const handelCopy = () => {
    const myEmail = "aungmyoaye.webdev@gmail.com";
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none   dark:border-white/[0.2]  border border-transparent justify-between flex flex-col space-y-4 relative overflow-hidden",
        className
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {/* Image section */}
        <div className="h-full w-full absolute">
          {image && (
            <div className="relative h-full w-full ">
              <Image
                src={image}
                fill
                alt="image"
                className="object-cover object-center "
              />
            </div>
          )}
        </div>
        {id === 2 && <GlobeDemo />}
        {/* Gradient background */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center  font-bold px-4 pointer-events-none "></div>
          </BackgroundGradientAnimation>
        )}

        {/* Title and descprition section */}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <p className="font-extralight  md:text-base">{description}</p>
          <h1 className=" text-lg md:text-xl font-bold max-w-96  z-10">
            {title}
          </h1>
          {id === 6 && (
            <div className="relative mt-4 mx-auto" onClick={handelCopy}>
              <div className="absolute right-0 -bottom-5">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  width={400}
                  height={200}
                />
              </div>
              <Button
                borderRadius="1.75rem"
                duration={Math.floor(Math.random() * 10000) + 1000}
                className=" text-black dark:text-white border-neutral-400 dark:border-slate-800 bg-slate-900  text-base bg-opacity-95 px-6 py-3 shadow-md"
              >
                {copied ? "Copied email successfully" : "Copy My Email"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
