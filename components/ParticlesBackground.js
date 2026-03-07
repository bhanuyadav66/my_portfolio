"use client";

import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {

const particlesInit = async (engine) => {
await loadFull(engine);
};

return (
<Particles
id="tsparticles"
init={particlesInit}
options={{
background: { color: "#000000" },
particles: {
number: { value: 60 },
color: { value: "#ffffff" },
links: {
enable: true,
distance: 150,
color: "#ffffff",
opacity: 0.2
},
move: {
enable: true,
speed: 1
},
size: {
value: { min:1, max:3 }
}
}
}}
/>
);
}