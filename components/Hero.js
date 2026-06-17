import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6">
      <div className="max-w-5xl mx-auto">

        {/* Intro line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 mb-4 text-sm md:text-base"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Allam Bhanu Prakash.
        </motion.h1>

        {/* Sub-headline */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-medium text-gray-400 mt-2"
        >
          I build AI systems and full-stack web applications.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-gray-400 max-w-xl text-base md:text-lg leading-relaxed"
        >
          Final-year CS (Data Science) student at Malla Reddy Engineering College,
          Hyderabad. I ship production-deployed ML pipelines, RAG chatbots, and
          full-stack apps — currently open to ML Engineer and Software Engineer roles.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex gap-6 flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-500 rounded-md hover:bg-white hover:text-black transition flex items-center gap-2"
          >
            <FaDownload />
            Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}
