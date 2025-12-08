"use client";

import { About } from "./About";
import { BlogPost } from "./BlogPost";
import { Performance } from "./Performance";
import { Projects } from "./Projects";
import { Reference } from "./Reference";
import { Services } from "./Services";
import { Welcome } from "./Welcome";

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
      <About />
      <Performance />
      <Projects />
      <BlogPost blog={Blogs.hse} />
      <BlogPost blog={Blogs.quality} />
      <Services />
      <Reference />
    </main>
  );
};
