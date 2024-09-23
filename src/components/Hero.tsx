"use client";

import { motion } from "framer-motion";

import { AuroraBackground } from "./ui/AuroraBackground";

import React from "react";
import { TextGenerateEffect } from "./ui/TextEffect";

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
          className="relative flex flex-col gap-2 items-center justify-center "
        >
          <TextGenerateEffect
            words="Hi I'm Aung Myo Aye"
            className="text-sm md:text-base font-semibold  text-center font-serif"
          />

          <TextGenerateEffect
            words="A Full Stack Developer From Myanmar"
            className="font-bold text-2xl  md:text-3xl lg:text-4xl font-serif "
          />

          <TextGenerateEffect
            words="Tramsforming Concept into Seamless User Expriences"
            className="text-xl  md:text-2xl font-semibold  "
          />

          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Debug now
          </button>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
