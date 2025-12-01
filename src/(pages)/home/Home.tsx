"use client";

import { About } from "./About";
import { Performance } from "./Performance";
import { Projects } from "./Projects";
import { Reference } from "./Reference";
import { Welcome } from "./Welcome";

export const Home = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <Welcome />
      <About />
      <Performance />
      <Projects />
      <Reference />
    </main>
  );
};
