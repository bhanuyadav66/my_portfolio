"use client";

import { useState, useEffect } from "react";

export default function Navbar() {

  const [active, setActive] = useState("about");

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();

  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="relative group w-10 h-10">

          <div className="absolute inset-0 bg-cyan-400 rounded-md opacity-0 group-hover:opacity-100 transition duration-300"></div>

          <div className="relative flex items-center justify-center w-10 h-10 border border-cyan-400 text-cyan-400 font-bold text-lg rounded-md bg-gray-900 transition duration-700 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
            B
          </div>

        </div>

        {/* Navigation */}
        <div className="flex gap-8 text-sm font-medium relative">

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative transition duration-300 ${
                active === item.id
                  ? "text-cyan-400"
                  : "hover:text-cyan-400"
              }`}
            >
              {item.label}

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-cyan-400 transition-transform duration-300 origin-left ${
                  active === item.id
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}

        </div>

      </div>

    </nav>
  );
}