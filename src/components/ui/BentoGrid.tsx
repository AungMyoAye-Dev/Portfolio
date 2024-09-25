"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBackground";
import Image from "next/image";
import { Button } from "./MovingBorder";
import { useState } from "react";

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

  const animationData = JSON.parse(
    '{"v":"5.1.20","fr":29.9700012207031,"ip":0,"op":60.0000024438501,"w":1080,"h":1080,"nm":"mensaLoad","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"mensa_logo_rund_flat_toAnimate Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":4,"s":[540,540,0],"e":[540,556,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":5,"s":[540,556,0],"e":[540,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"n":"0p667_0p667_0p167_0p167","t":7,"s":[540,540,0],"e":[540,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"n":"0p667_1_0p167_0","t":9,"s":[540,540,0],"e":[540,556,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"n":"0p667_1_0p167_0","t":10,"s":[540,556,0],"e":[540,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"n":"0p667_0p667_0p167_0p167","t":12,"s":[540,540,0],"e":[540,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"n":"0p667_1_0p167_0","t":14,"s":[540,540,0],"e":[540,556,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"n":"0p667_1_0p167_0","t":15,"s":[540,556,0],"e":[540,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"n":"0p667_0p667_0p167_0p167","t":17,"s":[540,540,0],"e":[540,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"n":"0p667_1_0p167_0","t":19,"s":[540,540,0],"e":[540,565,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"n":"0p667_1_0p167_0","t":20,"s":[540,565,0],"e":[540,540,0],"to":[0,0,0],"ti":[0,0,0]},{"t":22.0000008960784}],"ix":2},"a":{"a":0,"k":[560,560,0],"ix":1},"s":{"a":0,"k":[75,75,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-55.302],[0,0],[-51.408,22.005],[-179.639,-76.893]],"o":[[0,0],[0,-55.302],[179.639,-76.893],[51.408,22.005]],"v":[[354.144,102.111],[-354.144,102.111],[-269.459,-25.218],[269.459,-25.218]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.008,0.188,0.314,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fläche 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"n":"0p667_1_0p167_0p167","t":0,"s":[560,89.967],"e":[560,89.967],"to":[0,28.0485363006592],"ti":[0,-62.9028472900391]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":15,"s":[560,89.967],"e":[560,327.967],"to":[0,26.0553131103516],"ti":[0,-11.6181297302246]},{"t":20.0000008146167}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":16,"s":[0],"e":[100]},{"t":20.0000008146167}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformieren"}],"nm":"bun oben","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[0,42.692],[-340.561,-42.692],[340.561,-42.692]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.008,0.188,0.314,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fläche 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"n":"0p667_1_0p167_0p167","t":0,"s":[560,185.084],"e":[560,185.084],"to":[0,34.5180320739746],"ti":[0,-82.5036697387695]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":10,"s":[560,185.084],"e":[560,511.084],"to":[0,47.3617668151855],"ti":[0,-19.815299987793]},{"t":15.0000006109625}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":11,"s":[0],"e":[100]},{"t":15.0000006109625}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformieren"}],"nm":"cheese","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[12.783,0],[0,0],[0,12.783],[0,0],[-12.783,0],[0,0],[0,-12.783],[0,0]],"o":[[0,0],[-12.783,0],[0,0],[0,-12.783],[0,0],[12.783,0],[0,0],[0,12.783]],"v":[[330.999,42.693],[-330.999,42.693],[-354.144,19.548],[-354.144,-19.546],[-330.999,-42.692],[330.999,-42.692],[354.144,-19.546],[354.144,19.548]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.008,0.188,0.314,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fläche 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":5,"s":[560,191.044],"e":[560,631.044],"to":[0,73.3333358764648],"ti":[0,-73.3333358764648]},{"t":10.0000004073083}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":6,"s":[0],"e":[100]},{"t":10.0000004073083}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformieren"}],"nm":"beef","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[354.144,42.693],[-354.144,42.693],[-354.144,-42.693],[354.144,-42.693]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.008,0.188,0.314,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fläche 2","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"fl","c":{"a":0,"k":[0.008,0.188,0.314,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fläche 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":0,"s":[560,231.385],"e":[560,757.385],"to":[0,87.6666641235352],"ti":[0,-87.6666641235352]},{"t":5.00000020365417}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":1,"s":[0],"e":[100]},{"t":5.00000020365417}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformieren"}],"nm":"bun unten","np":3,"cix":2,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"kreis-animated","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":20,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":26,"s":[100],"e":[0]},{"t":40.0000016292334}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0","0p667_1_0p333_0"],"t":17,"s":[100,100,100],"e":[115,115,100]},{"t":40.0000016292334}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-250.737],[250.737,0],[0,250.737],[-250.737,0]],"o":[[0,250.737],[-250.737,0],[0,-250.737],[250.737,0]],"v":[[454,0],[0,454],[-454,0],[0,-454]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.008,0.188,0.314,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":1,"lj":1,"ml":10,"nm":"Kontur 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[540,540],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformieren"}],"nm":"Gruppe 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0}],"markers":[]}'
  );

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
