"use client";

import { About } from "./components/About";
import { BlogPost } from "./components/BlogPost";
import { Performance } from "./components/Performance";
import { Projects } from "./components/Projects";
import { Reference } from "./components/Reference";
import { Services } from "./components/Services";
import { Welcome } from "./components/Welcome";

import HseBlogPhoto from "@/assets/images/home/blog/hse-blog.jpg";
import QualityBlogPhoto from "@/assets/images/home/blog/quality-blog.jpg";

const Blogs = {
  hse: {
    id: "hseBlog",
    image: HseBlogPhoto,
    link: "/hse",
  },
  quality: {
    id: "qualityBlog",
    image: QualityBlogPhoto,
    link: "/quality",
  },
};

export const Home = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <Welcome />
      <About index={1} />
      <Performance index={2} />
      <Projects index={4} />
      <Services index={3} />
      <BlogPost blog={Blogs.quality} />
      <BlogPost blog={Blogs.hse} reverse />
      <Reference index={5} />
    </main>
  );
};
