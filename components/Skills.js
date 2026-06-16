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

const skillGroups = [
  {
    label: "Languages",
    accent: "bg-blue-900/40 text-blue-300 ring-1 ring-blue-700/50",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    label: "ML / AI",
    accent: "bg-purple-900/40 text-purple-300 ring-1 ring-purple-700/50",
    skills: [
      "TensorFlow", "PyTorch", "Scikit-learn", "LangChain",
      "FastEmbed", "Pandas", "NumPy", "XGBoost", "Matplotlib", "Seaborn",
    ],
  },
  {
    label: "Web & APIs",
    accent: "bg-green-900/40 text-green-300 ring-1 ring-green-700/50",
    skills: [
      "React", "Next.js", "Node.js", "FastAPI",
      "Tailwind CSS", "Socket.IO", "REST APIs", "Streamlit",
    ],
  },
  {
    label: "Databases",
    accent: "bg-yellow-900/40 text-yellow-300 ring-1 ring-yellow-700/50",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "ChromaDB"],
  },
  {
    label: "Cloud & DevOps",
    accent: "bg-red-900/40 text-red-300 ring-1 ring-red-700/50",
    skills: ["AWS", "Google Cloud", "Azure", "Vercel", "Render", "Docker", "Git"],
  },
  {
    label: "AI Tooling",
    accent: "bg-orange-900/40 text-orange-300 ring-1 ring-orange-700/50",
    skills: ["Groq LLM", "RAG Pipelines", "LLM Integration", "Power BI"],
  },
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

        {skillGroups.map((skill,index)=>(
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
