"use client";

import { motion } from "framer-motion";

import { AuroraBackground } from "./ui/AuroraBackground";

import React from "react";
import { TextGenerateEffect } from "./ui/TextEffect";
import Image from "next/image";
import { Button } from "./ui/MovingBorder";

const Hero = () => {
  return (
    <section id="home">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-12 gap-8 w-full"
        >
          <div className="relative flex flex-col gap-4 md:gap-6 text-center items-center md:text-left md:items-start w-full md:w-[50%]   ">
            <TextGenerateEffect
              words="Hi I'm Aung Myo Aye"
              className="text-base md:text-lg font-semibold font-serif"
            />

            <TextGenerateEffect
              words="A Full Stack Developer and UI / UX Desinger From Myanmar"
              className="font-bold text-2xl  md:text-4xl lg:text-5xl font-serif "
            />

            <TextGenerateEffect
              words="Tramsforming concept into Seamless User Expriences"
              className="text-xl  md:text-2xl font-semibold  "
              duration={2}
            />
            <div className="flex flex-col md:flex-row gap-8">
              <a href="mailto:aungmyoaye.webdev@gmail.com">
                <Button
                  borderRadius="1.75rem"
                  duration={Math.floor(Math.random() * 10000) + 1000}
                  className=" text-black dark:text-white border-neutral-400 dark:border-slate-800 bg-slate-300 dark:bg-gray-800 text-base opacity-95 hover:bg-purple-400 px-6 py-3 shadow-md"
                >
                  Get in touch
                </Button>
              </a>
              <Button
                borderRadius="1.75rem"
                duration={Math.floor(Math.random() * 10000) + 1000}
                className=" text-black dark:text-white border-neutral-400 dark:border-slate-800   text-base bg-opacity-95 bg-purple-700 px-6 py-3 shadow-md"
              >
                Download My Resume
              </Button>
            </div>
          </div>
          <div>
            <Button
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000) + 10000}
              className="relative size-60 md:size-80  "
            >
              <Image
                src={"/profile.svg"}
                fill
                alt="Aung Myo Aye's profile photo"
                className="object-cover  "
              />
            </Button>
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
