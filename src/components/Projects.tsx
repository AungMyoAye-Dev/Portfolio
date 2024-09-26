"use client";
import { projects } from "@/data";
import React from "react";
import Card from "./ui/3Dcard";

const Projects = () => {
  return (
    <section className="py-20">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-center">
        My Small Section Of{" "}
        <span className="text-purple-300">Recent Projects</span>
      </h1>

      <main className="grid md:grid-cols-2 gap-4 mx-auto place-items-center">
        {projects.map((project) => (
          <Card />
        ))}
      </main>
    </section>
  );
};

export default Projects;
