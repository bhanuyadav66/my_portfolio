"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";

const stats = [
  { value: "8+",   label: "Projects"         },
  { value: "8.18", label: "CGPA"             },
  { value: "7",    label: "Certifications"   },
  { value: "2",    label: "Live Deployments" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative group w-[320px]">
            {/* Offset border behind the image */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-cyan-400 rounded-xl" />

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

        {/* Text content */}
        <div>
          <Reveal>
            <h2 className="text-4xl font-bold">About Me</h2>
          </Reveal>

          <p className="mt-4 text-cyan-400 font-medium text-lg">
            B.Tech in Computer Science and Engineering – Data Science
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            I am a final-year B.Tech Computer Science (Data Science) student at
            Malla Reddy Engineering College, Hyderabad, graduating in 2026 with a
            CGPA of{" "}
            <span className="text-white font-medium">8.18</span>. I have
            hands-on experience building full-stack applications and deploying ML
            systems to production — including a live RAG chatbot backed by
            LangChain, FastEmbed, and Groq.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            I enjoy working with data pipelines, machine learning models, and
            visualisation tools to turn raw data into actionable insights. One of
            my most impactful projects is a{" "}
            <span className="text-cyan-400 font-medium">
              Graph-CNN Intrusion Detection System
            </span>{" "}
            that analyses correlated cyber attacks using graph neural networks.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            I am open to roles in Machine Learning Engineering, Software
            Engineering, and Full-Stack Development — anywhere I can build
            intelligent systems that solve real-world problems.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center"
              >
                <p className="text-2xl font-bold text-cyan-400">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
