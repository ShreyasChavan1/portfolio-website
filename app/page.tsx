"use client"
import Image from "next/image";
import { motion ,useScroll, useTransform } from "framer-motion";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Fire from "./components/sections/fire";
import Skills from "./components/sections/skills";
import Work from "./components/sections/work";
import Contact from "./components/sections/contact";
import Navbar from "./components/navbar/overlay";

export default function Home() {
  const {scrollY} = useScroll();
  const aboutY = useTransform(scrollY,[0,600],["0%","-100%"]);
  return (
    <>
    <section className="sticky top-0 h-screen md:h-screen" id="HOME">
      <motion.div className="z-0 md:h-screen">
        <Hero/>
      </motion.div>
    </section>
      {/* <Fire/> */}
      <section className="relative h-screen md:min-h-screen overflow-hidden z-50" id="ABOUT">

        <motion.div
         className="relative">
      
        <About/>
        </motion.div>
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
