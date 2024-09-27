"use client";
import { projects } from "@/data";
import React from "react";
import Card from "./ui/3Dcard";

const Projects = () => {
  return (
    <section className="py-20 space-y-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-center">
        My Small Section Of{" "}
        <span className="text-purple-300">Recent Projects</span>
      </h1>

      <main className="flex flex-wrap items-center justify-center p-4 gap-x-16 max-w-7xl mx-auto">
        {projects.map((item) => (
          <Card
            key={item.id}
            image={item.img}
            title={item.title}
            description={item.des}
            link={item.link}
            iconList={item.iconLists}
          />
        ))}
      </main>
    </section>
  );
};

export default Projects;
