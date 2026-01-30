"use client"
import Image from "next/image"
import hero from "@/app/assets/4kfullbody (1) (1) (1).png"
import hand from "@/app/assets/4khand.png"
import backfire from "@/app/assets/firecutout.png"
import Aura from "@/app/assets/aura.png"
import stars from "@/app/assets/stars.png"
import { useRef } from "react"
import { easeInOut, motion, useScroll, useTransform } from 'framer-motion'


const FLOAT_SLOW = {
  animate: { y: [0, 7, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
}

const FLOAT_FAST = {
  animate: { y: [0, 13, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
}

const FIRE_ANIMATION = {
  animate: {
    opacity: [0.4, 0.7, 0.5],
    y: [0, -12, 0],
    scale: [1, 0.9, 1],
  },
  transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
}

const STARS_ANIMATION = {
  animate: { x: [0, 15, -10, 0], y: [0, -10, 10, 0] },
  transition: { duration: 10, repeat: Infinity, repeatType: "mirror", ease: "linear" },
}
const MotionImage = motion(Image) //Wraps Next.js’s <Image> component with Framer Motion so it can animate.
export default function Hero() {
  const { scrollYProgress } = useScroll()
  const progress = useTransform(scrollYProgress, [0, 0.35], [0, 1])
  const handY = useTransform(progress, [0, 1], ["0%", "-20%"])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#06090A]">
      <div className="relative lg:h-full md:h-full max-w-[1500px] mx-auto px-2 lg:px-8 md:px-6 flex flex-col-reverse lg:flex-row items-center lg:items-start md:items-center">

        {/* Text */}
        <div className="mt-10 ml-3 md:ml-10 w-fit h-fit">
          <span className="text-[60px] lg:text-9xl md:text-8xl text-purple-400 font-bold leading-[0.8]">
            Hello
          </span><br />
          <span className="text-[60px] lg:text-[120px] md:text-[100px] text-white font-bold leading-[0.9]">
            Call me <br />Web-Developer
          </span>
        </div>

        {/* Desktop visuals */}
        <div className="absolute hidden lg:block md:block bottom-0 right-0 pointer-events-none z-20">
          <div className="relative w-full h-full">

            <MotionImage
              src={backfire}
              width={500}
              className="absolute bottom-25 right-30 z-0 opacity-70 blur-[1px]"
              {...FIRE_ANIMATION}
            />

            <Image
              src={Aura}
              width={600}
              className="absolute bottom-[-100] right-25 z-5"
              alt="Aura"
            />

            <MotionImage
              src={stars}
              width={550}
              className="absolute bottom-50 right-28 z-5"
              {...STARS_ANIMATION}
            />

            <MotionImage
              src={hero}
              width={780}
              height={500}
              className="relative z-10"
              {...FLOAT_SLOW}
            />

            <MotionImage
              src={hand}
              width={780}
              className="absolute bottom-0 right-18 z-20"
              style={{ y: handY }}
            />

          </div>
        </div>

        {/* Mobile visuals */}
        <div className="relative lg:hidden md:hidden w-full h-[420px] mt-10 pointer-events-none">

          <MotionImage
            src={backfire}
            width={300}
            className="absolute inset-0 mx-auto left-1/4 top-1/4 opacity-70 blur-[1px] z-0"
            {...FIRE_ANIMATION}
          />

          <Image
            src={Aura}
            width={300}
            className="absolute inset-0 left-1/4 mx-auto top-30 z-5"
            alt="Aura"
          />

          <MotionImage
            src={stars}
            width={350}
            className="absolute inset-0 mx-auto top-30 z-5"
            {...STARS_ANIMATION}
          />

          <MotionImage
            src={hero}
            fill
            className="object-contain ml-12 z-10 scale-[1.3]"
            {...FLOAT_SLOW}
          />

          <MotionImage
            src={hand}
            fill
            className="object-contain z-20 scale-[1.3]"
            {...FLOAT_FAST}
          />

          <div className="absolute -bottom-6 left-0 w-full h-[200px] z-30 bg-gradient-to-t from-[#06090A] via-[#06090A]/60 to-transparent" />

        </div>
      </div>
    </div>
  )
}

