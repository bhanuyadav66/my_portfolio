"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
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
    live: null,
    featured: true,
  },
{
title: "Road Accident Prediction Using Machine Learning",
description:
"Developed a machine learning system to predict road accident probability using environmental and traffic features. Compared multiple models including Random Forest, SVM, KNN and XGBoost to identify the most reliable predictive model.",
tech: ["Python","Scikit-learn","Pandas","XGBoost","Seaborn"],
github: "https://github.com/bhanuyadav66/Road-Accident-Prediction"
},

{
title: "E-Commerce Sales & Customer Behavior Analytics",
description:
"Built an end-to-end analytics pipeline analyzing 4K+ customer transactions. Applied RFM segmentation and K-Means clustering and developed a churn prediction model with 98.9% accuracy.",
tech: ["Python","PostgreSQL","SQL","Power BI","Scikit-learn"],
github: "https://github.com/bhanuyadav66/Ecommerce_Analytics_Project"
},

{
title: "Graph-CNN Intrusion Detection System (RANK)",
description:
"Designed an intrusion detection system using Graph Convolutional Neural Networks to detect correlated cyber attacks and classify incidents using graph-based deep learning.",
tech: ["Python","PyTorch Geometric","GNN","FastAPI","Streamlit"],
github: "https://github.com/bhanuyadav66/RANK-GraphCNN-IDS"
},

{
title: "Multimodal Emotion Recognition System",
description:
"Built a multimodal AI model predicting emotions using speech and text inputs. Demonstrated improved accuracy using multimodal fusion techniques.",
tech: ["Python","TensorFlow","Librosa","Scikit-learn"],
github: "https://github.com/bhanuyadav66/multimodal-emotion-recognition"
},

{
title: "Traffic Sign Recognition System",
description:
"Developed a CNN-based computer vision system to recognize German traffic signs from images and built a GUI application for real-time predictions.",
tech: ["Python","TensorFlow","Keras","Tkinter"],
github: "https://github.com/bhanuyadav66/Traffic-Sign-Classifier"
},

{
title: "Chocolate Sales Data Analysis",
description:
"Performed exploratory data analysis to identify product trends, regional sales insights, and revenue patterns using Python visualization tools.",
tech: ["Python","Pandas","Matplotlib","Seaborn"],
github: "https://github.com/bhanuyadav66/Chocolate-sale-analysis-"
}
];

export default function Projects() {

return (

<section id="projects" className="py-28 px-6 max-w-7xl mx-auto">

<Reveal>
<h2 className="text-5xl font-bold text-center mb-20">
My Projects
</h2>
</Reveal>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{projects.map((project,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
whileHover={{scale:1.08}}
transition={{duration:0.5}}
className="bg-gradient-to-br from-gray-900 to-gray-800 p-7 rounded-xl shadow-2xl border border-gray-800 hover:border-gray-600 transform hover:-translate-y-2 hover:rotate-1 transition duration-300"
>

<h3 className="text-2xl font-semibold">
{project.title}
</h3>

<p className="text-gray-400 mt-4 text-sm leading-relaxed">
{project.description}
</p>

<div className="flex flex-wrap gap-2 mt-5">

{project.tech.map((tech,index)=>(
<span
key={index}
className="text-xs px-3 py-1 bg-gray-700 rounded-full text-gray-200"
>
{tech}
</span>
))}

</div>

<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center justify-center mt-6 text-2xl text-gray-300 hover:text-cyan-400 transition"
>
<FaGithub />
</a>

</motion.div>
))}

</div>

</section>

)
}
