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
      <About index={1} />
      <Performance index={2} />
      <Services index={3} />
      <BlogPost blog={Blogs.hse} />
      <Projects index={4} />
      <BlogPost blog={Blogs.quality} reverse />
      <Reference index={5} />
    </main>
  );
};
