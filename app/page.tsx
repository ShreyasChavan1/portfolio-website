import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Fire from "./components/sections/fire";
import Skills from "./components/sections/skills";

export default function Home() {
  return (
    <>
      <Hero/>
      {/* <Fire/> */}
      <About/>
      <Skills/>
    </>
  );
}
