"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center">

      <motion.h2
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:0.6 }}
        className="text-4xl font-bold"
      >
        Get In Touch
      </motion.h2>

      <p className="mt-6 text-gray-400">
        Interested in working together or discussing opportunities?
      </p>

      <div className="flex justify-center gap-8 mt-10 text-3xl">

        <a
          href="mailto:allambhanuprakash3413@gmail.com"
          className="hover:text-gray-400 transition"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/bhanuyadav66"
          target="_blank"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/allam-bhanu-yadav/"
          target="_blank"
          className="hover:text-gray-400 transition"
        >
          <FaLinkedin />
        </a>

      </div>

    </section>
  );
}