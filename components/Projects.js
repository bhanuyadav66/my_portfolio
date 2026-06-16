"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./Reveal";

const projects = [
  {
    title: "RAG Document Chatbot",
    description:
      "Production-deployed AI chatbot that answers questions over uploaded PDFs using Retrieval-Augmented Generation. Features SSE streaming, multi-document upload, markdown rendering, and source chunk viewer.",
    tags: ["Python", "FastAPI", "LangChain", "FastEmbed", "Groq", "React", "Vite"],
    github: "https://github.com/bhanuyadav66/Rag-chatbot",
    live: "https://frontend-nine-gamma-15.vercel.app",
    featured: true,
  },
  {
    title: "Livestock Marketplace",
    description:
      "Full-stack marketplace for livestock buying/selling with real-time chat, geospatial search, and AI-powered recommendations. Built with Next.js, MongoDB, and Socket.IO.",
    tags: ["Next.js", "MongoDB", "Socket.IO", "Node.js", "Geospatial APIs"],
    github: "https://github.com/bhanuyadav66",
    live: "https://livestock-marketplace-six.vercel.app/",
    featured: true,
  },
  {
    title: "Road Accident Prediction Using Machine Learning",
    description:
      "Developed a machine learning system to predict road accident probability using environmental and traffic features. Compared multiple models including Random Forest, SVM, KNN and XGBoost to identify the most reliable predictive model.",
    tags: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Seaborn"],
    github: "https://github.com/bhanuyadav66/Road-Accident-Prediction",
    live: null,
    featured: false,
  },
  {
    title: "E-Commerce Sales & Customer Behavior Analytics",
    description:
      "Built an end-to-end analytics pipeline analyzing 4K+ customer transactions. Applied RFM segmentation and K-Means clustering and developed a churn prediction model with 98.9% accuracy.",
    tags: ["Python", "PostgreSQL", "SQL", "Power BI", "Scikit-learn"],
    github: "https://github.com/bhanuyadav66/Ecommerce_Analytics_Project",
    live: null,
    featured: false,
  },
  {
    title: "Graph-CNN Intrusion Detection System (RANK)",
    description:
      "Designed an intrusion detection system using Graph Convolutional Neural Networks to detect correlated cyber attacks and classify incidents using graph-based deep learning.",
    tags: ["Python", "PyTorch Geometric", "GNN", "FastAPI", "Streamlit"],
    github: "https://github.com/bhanuyadav66/RANK-GraphCNN-IDS",
    live: null,
    featured: false,
  },
  {
    title: "Multimodal Emotion Recognition System",
    description:
      "Built a multimodal AI model predicting emotions using speech and text inputs. Demonstrated improved accuracy using multimodal fusion techniques.",
    tags: ["Python", "TensorFlow", "Librosa", "Scikit-learn"],
    github: "https://github.com/bhanuyadav66/multimodal-emotion-recognition",
    live: null,
    featured: false,
  },
  {
    title: "Traffic Sign Recognition System",
    description:
      "Developed a CNN-based computer vision system to recognize German traffic signs from images and built a GUI application for real-time predictions.",
    tags: ["Python", "TensorFlow", "Keras", "Tkinter"],
    github: "https://github.com/bhanuyadav66/Traffic-Sign-Classifier",
    live: null,
    featured: false,
  },
  {
    title: "Chocolate Sales Data Analysis",
    description:
      "Performed exploratory data analysis to identify product trends, regional sales insights, and revenue patterns using Python visualization tools.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/bhanuyadav66/Chocolate-sale-analysis-",
    live: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-7xl mx-auto">
      <Reveal>
        <h2 className="text-5xl font-bold text-center mb-20">My Projects</h2>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className={`relative flex flex-col bg-gradient-to-br p-7 rounded-xl shadow-2xl border transform hover:-translate-y-2 transition duration-300 ${
              project.featured
                ? "from-indigo-950/40 to-gray-900 border-indigo-500/40 hover:border-indigo-400/60"
                : "from-gray-900 to-gray-800 border-gray-800 hover:border-gray-600"
            }`}
          >
            {/* Featured badge */}
            {project.featured && (
              <span className="absolute top-4 right-4 text-xs font-semibold text-indigo-400 bg-indigo-900/50 px-2.5 py-0.5 rounded-full ring-1 ring-indigo-600/50">
                Featured
              </span>
            )}

            {/* Title — right-padded on featured cards so it doesn't collide with the badge */}
            <h3
              className={`text-xl font-semibold leading-snug ${
                project.featured ? "pr-20" : ""
              }`}
            >
              {project.title}
            </h3>

            {/* Description — flex-1 keeps card heights consistent in each row */}
            <p className="text-gray-400 mt-3 text-sm leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-gray-700 rounded-full text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links row */}
            <div className="flex items-center gap-5 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="text-2xl text-gray-300 hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
