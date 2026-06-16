"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaAws,
  FaChartBar,
} from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";

// Each group: label shown as header, icon shown beside it,
// accent applied to every pill badge, skills[] rendered as pills.
const skillGroups = [
  {
    label: "Languages",
    icon: <FaPython />,
    accent: "bg-blue-900/40 text-blue-300 ring-1 ring-blue-700/50",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    label: "ML / AI",
    icon: <SiTensorflow />,
    accent: "bg-purple-900/40 text-purple-300 ring-1 ring-purple-700/50",
    skills: [
      "TensorFlow", "PyTorch", "Scikit-learn", "LangChain",
      "FastEmbed", "Pandas", "NumPy", "XGBoost", "Matplotlib", "Seaborn",
    ],
  },
  {
    label: "Web & APIs",
    icon: <FaReact />,
    accent: "bg-green-900/40 text-green-300 ring-1 ring-green-700/50",
    skills: [
      "React", "Next.js", "Node.js", "FastAPI",
      "Tailwind CSS", "Socket.IO", "REST APIs", "Streamlit",
    ],
  },
  {
    label: "Databases",
    icon: <FaDatabase />,
    accent: "bg-yellow-900/40 text-yellow-300 ring-1 ring-yellow-700/50",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "ChromaDB"],
  },
  {
    label: "Cloud & DevOps",
    icon: <FaAws />,
    accent: "bg-red-900/40 text-red-300 ring-1 ring-red-700/50",
    skills: ["AWS", "Google Cloud", "Azure", "Vercel", "Render", "Docker", "Git"],
  },
  {
    label: "AI Tooling",
    icon: <FaChartBar />,
    accent: "bg-orange-900/40 text-orange-300 ring-1 ring-orange-700/50",
    skills: ["Groq LLM", "RAG Pipelines", "LLM Integration", "Power BI"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Skills
      </motion.h2>

      {/* One card per category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="bg-gray-900 border border-gray-800 hover:border-cyan-400/40 rounded-xl p-6 transition duration-300"
          >
            {/* Category header: icon + label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-cyan-400 text-lg">{group.icon}</span>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                {group.label}
              </h3>
            </div>

            {/* Skill pills — rendered from skills[] using the group's accent */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${group.accent}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
