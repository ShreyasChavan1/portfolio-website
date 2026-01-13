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
    <section className="sticky top-0 h-screen">
      <div className="z-0 h-screen">
        <Hero/>
      </div>
    </section>
      {/* <Fire/> */}
      <section className="relative min-h-screen overflow-hidden z-50">
        <motion.div
         className="relative">
        <About/>
        </motion.div>
      </section>
      <section className="relative z-50">
        <Skills/>
      </section>
      <section className="relative z-50">
        <Work/>
      </section>
      <section className="relative z-50">
        <Contact/>
      </section>
    </>
  );
}
