"use client";

import { useState, useEffect } from "react";

const navItems = [
  { id: "about",    label: "About"    },
  { id: "projects", label: "Projects" },
  { id: "skills",   label: "Skills"   },
  { id: "contact",  label: "Contact"  },
];

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        // 0.6 was the bug — Projects/Skills are taller than the viewport so
        // 60 % of them is never visible at once and the observer never fired.
        // 0.3 triggers as soon as 30 % of the section is in view.
        threshold: 0.3,

        // Ignore the bottom 20 % of the viewport so the next section doesn't
        // steal "active" before the current one has fully scrolled away.
        rootMargin: "0px 0px -20% 0px",
      }
    );

    // Observe only the four sections that have nav links — by id, not by tag.
    // querySelectorAll("section") was also observing the Hero section whose id
    // isn't in navItems, which reset active to an unknown value and dropped
    // all underlines.
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="relative group w-10 h-10">
          <div className="absolute inset-0 bg-cyan-400 rounded-md opacity-0 group-hover:opacity-100 transition duration-300" />
          <div className="relative flex items-center justify-center w-10 h-10 border border-cyan-400 text-cyan-400 font-bold text-lg rounded-md bg-gray-900 transition duration-700 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
            B
          </div>
        </div>

        {/* Nav links */}
        <div className="flex gap-8 text-sm font-medium">
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

              {/* Underline — controlled entirely by active state.
                  group-hover was removed: the <a> had no "group" class so it
                  never triggered anyway. */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-cyan-400 transition-transform duration-300 origin-left ${
                  active === item.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}
