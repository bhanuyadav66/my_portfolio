import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-950 to-black text-white min-h-screen" >

      <ParticlesBackground />

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Skills />

      <Certifications />

      <Contact />

      <Footer />

    </main>
  );
}
