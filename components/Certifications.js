// components/Certifications.js
const certs = [
  { name: "Azure AI Fundamentals (AI-900)", issuer: "Microsoft" },
  { name: "Google Cloud Data Analytics", issuer: "Google" },
  { name: "AI Fundamentals", issuer: "IBM SkillsBuild" },
  { name: "Data Science Fundamentals", issuer: "IBM SkillsBuild" },
  { name: "Python for Data Science", issuer: "IBM SkillsBuild" },
  { name: "Python Coder", issuer: "Kaggle" },
  { name: "Big Data 101 & Hadoop 101", issuer: "IBM / Cognitive Class" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {certs.map((cert) => (
          <div
            key={cert.name}
            className="flex items-start gap-3 rounded-lg border border-gray-800 bg-gray-900/40 px-4 py-3"
          >
            <span className="mt-0.5 text-green-400 text-lg">✓</span>
            <div>
              <p className="text-sm font-medium text-white">{cert.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
