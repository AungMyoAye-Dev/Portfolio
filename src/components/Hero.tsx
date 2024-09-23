"use client";

import { motion } from "framer-motion";

import { AuroraBackground } from "./ui/AuroraBackground";

import React from "react";
import { TextGenerateEffect } from "./ui/TextEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-8 w-full"
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
              words="Tramsforming Concept into Seamless User Expriences"
              className="text-xl  md:text-2xl font-semibold  "
              duration={2}
            />

            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Debug now
            </button>
          </div>
          <div className="relative size-60 md:size-80  ">
            <Image
              src={""}
              fill
              alt="Aung Myo Aye's profile photo"
              className="object-cover bg-gray-500 "
            />
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
