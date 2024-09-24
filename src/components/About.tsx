"use client";
import React from "react";
import { cn } from "@/lib/utils";

import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";

const items = [
  {
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "I'm very flexible with time zone communicationns",
    description: "",
  },
  {
    title: "Tech enthusiast with a passion for development.",
    description: "",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Do you want to start a project together?",
    description: "",
  },
];

const About = () => {
  return (
    <section className="py-20 px-10 md:px-12" id="about">
      <BentoGrid className=" mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default About;
