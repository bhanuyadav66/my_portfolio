"use client";

import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-10">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">

        {/* LEFT — copy */}
        <div>
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs font-medium text-green-400">
              Open to ML Engineer & Software Engineer roles
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-cyan-400 mb-3 text-sm md:text-base"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl md:text-7xl font-bold text-white leading-[1.05]"
          >
            Allam Bhanu
            <br />
            Prakash.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-gray-400 mt-4"
          >
            I build AI systems and full-stack web applications.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-5 text-gray-400 max-w-xl text-base md:text-lg leading-relaxed"
          >
            Final-year CS (Data Science) student at Malla Reddy Engineering College,
            Hyderabad. I ship production-deployed ML pipelines, RAG chatbots, and
            full-stack apps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-9 flex gap-5 flex-wrap items-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-500 rounded-md hover:bg-white hover:text-black transition flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              <FaDownload />
              Resume
            </a>

            {/* Social row — replace href values with your real profile URLs */}
            <div className="flex items-center gap-4 ml-2 text-xl text-gray-500">
              <a
                href="https://github.com/bhanuyadav66"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/allam-bhanu-yadav/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:allambhanuprakash3413@gmail.com"
                aria-label="Send email"
                className="hover:text-cyan-400 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — signature element: a code panel grounded in your actual RAG project,
            not a generic gradient blob. Fills the dead space and signals "ML/full-stack dev"
            at a glance, before a recruiter reads a single word of copy. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="rounded-xl border border-gray-800 bg-gray-900/60 shadow-2xl overflow-hidden">
            {/* Fake editor title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-900/80">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-gray-500">rag_pipeline.py</span>
            </div>

            {/* Code content */}
            <pre className="p-6 text-sm leading-relaxed overflow-x-auto">
              <code className="font-mono">
                <span className="text-purple-400">class</span>{" "}
                <span className="text-cyan-300">RAGPipeline</span>:{"\n"}
                {"    "}
                <span className="text-purple-400">def</span>{" "}
                <span className="text-blue-300">__init__</span>(self){":"}{"\n"}
                {"        "}self.embedder = FastEmbed(){"\n"}
                {"        "}self.llm = Groq(model=
                <span className="text-green-400">"llama-3.1-8b"</span>){"\n\n"}
                {"    "}
                <span className="text-purple-400">def</span>{" "}
                <span className="text-blue-300">query</span>(self, question){":"}{"\n"}
                {"        "}chunks = self.embedder.retrieve(question){"\n"}
                {"        "}
                <span className="text-purple-400">return</span>{" "}
                self.llm.generate(question, chunks)
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-2 h-4 bg-cyan-400 ml-1 align-middle"
                />
              </code>
            </pre>
          </div>

          {/* Stat chips under the panel — quick-scan credibility */}
          <div className="grid grid-cols-3 gap-3 mt-5">
            {[
              { value: "8+", label: "Projects" },
              { value: "8.18", label: "CGPA" },
              { value: "2", label: "Live Apps" },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center bg-gray-900/60 border border-gray-800 rounded-lg py-3"
              >
                <p className="text-xl font-bold text-cyan-400">{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="mx-auto mt-12 text-gray-600 hover:text-cyan-400 transition"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </section>
  );
}
