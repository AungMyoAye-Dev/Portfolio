"use client";
import React from "react";
import { cn } from "@/lib/utils";

import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { Griditems } from "@/data";

const About = () => {
  return (
    <section className="py-20 px-10 md:px-12" id="about">
      <BentoGrid className=" mx-auto">
        {Griditems.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            image={item.image}
            titleClassName={item.titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default About;
