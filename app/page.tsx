"use client"

import { motion} from "framer-motion";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Skills from "./components/sections/skills";
import Work from "./components/sections/work";
import Contact from "./components/sections/contact";


export default function Home() {

  return (
    <>
    <section className="relative lg:sticky md:sticky lg:top-0 md:top-0 h-screen" id="HOME">
      <motion.div className="z-0 lg:h-screen md:h-screen">
        <Hero/>
      </motion.div>
    </section>
      <section className="relative z-50" id="ABOUT">
        <About/>
      </section>
      <section className="relative z-50" id="SKILLS">
        <Skills/>
      </section>
      <section className="relative z-50" id="WORK">
        <Work/>
      </section>
      <section className="relative z-50" id="CONTACT">
        <Contact/>
      </section>
    </>
  );
}
