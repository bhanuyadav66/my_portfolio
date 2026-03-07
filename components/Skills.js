"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaChartBar
} from "react-icons/fa";

import {
  SiTensorflow,
  SiPytorch,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGooglecloud
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "PyTorch", icon: <SiPytorch /> },
  { name: "Power BI", icon: <FaChartBar /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Google Cloud", icon: <SiGooglecloud /> }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto text-center">

      <motion.h2
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.6 }}
        className="text-4xl font-bold mb-16"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        {skills.map((skill,index)=>(
          <motion.div
            key={index}
            whileHover={{ scale:1.1 }}
            className="w-32 h-32 flex flex-col items-center justify-center gap-3 bg-gray-900 rounded-xl border border-gray-800 hover:border-cyan-400 transition"
          >

            <div className="text-5xl text-cyan-400">
              {skill.icon}
            </div>

            <p className="text-gray-300 text-sm">
              {skill.name}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}