"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">

      <div className="grid md:grid-cols-2 gap-12 items-center">

<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="flex justify-center"
>
  <div className="relative group w-[320px]">

    {/* Border behind (fixed) */}
    <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-cyan-400 rounded-xl"></div>

    {/* Image container */}
    <div className="overflow-hidden rounded-xl">

      <Image
        src="/profile_new.png"
        alt="Allam Bhanu Prakash"
        width={320}
        height={320}
        className="rounded-xl object-cover grayscale group-hover:grayscale-0 group-hover:-translate-x-1 group-hover:-translate-y-1 transition duration-700 ease-in-out group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
      />

    </div>

  </div>
</motion.div>

        {/* Text */}
        <div>

          <Reveal>
            <h2 className="text-4xl font-bold">
              About Me
            </h2>
          </Reveal>

          <p className="mt-4 text-cyan-400 font-medium text-lg">
            B.Tech in Computer Science and Engineering – Data Science
          </p>

        // components/About.js — add this line to your About paragraph:

<p className="text-gray-400 leading-relaxed">
  I am a final-year B.Tech Computer Science (Data Science) student at
  Malla Reddy Engineering College, Hyderabad, graduating in 2026 with a
  CGPA of <span className="text-white font-medium">8.18</span>. I have
  hands-on experience building full-stack applications and deploying ML
  systems to production — including a live RAG chatbot backed by LangChain,
  FastEmbed, and Groq.
</p>
<p className="mt-4 text-gray-400 leading-relaxed">
  I enjoy working with data pipelines, machine learning models, and visualization tools to turn raw data into actionable insights. 
  One of my most impactful projects is a 
<span className="text-cyan-400 font-medium"> Graph-CNN Intrusion Detection System </span> 
  that analyzes correlated cyber attacks using graph neural networks.
</p>

<p className="mt-4 text-gray-400 leading-relaxed">
I am particularly interested in roles such as Data Analyst, Machine Learning Engineer, or AI Engineer where I can work with real-world datasets and build intelligent systems that solve practical problems.
</p>


          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-cyan-400">6+</p>
              <p className="text-sm text-gray-400">Projects</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-cyan-400">ML</p>
              <p className="text-sm text-gray-400">Machine Learning</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-cyan-400">Data</p>
              <p className="text-sm text-gray-400">Analytics</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-cyan-400">Cloud</p>
              <p className="text-sm text-gray-400">AWS / GCP</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
