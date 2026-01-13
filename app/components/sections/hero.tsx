"use client"
import Image from "next/image"
import hero from "@/app/assets/4kfullbody (1).png"
import hand from "@/app/assets/4khand.png"
import backfire from "@/app/assets/firecutout.png"
import Aura from "@/app/assets/aura.png"
import stars from "@/app/assets/stars.png"
import { useRef } from "react"
import {easeInOut, motion,useScroll,useTransform} from 'framer-motion'
import Fire from "./fire"
import About from "./about"
export default function Hero() {
    const MotionImage = motion(Image)
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    })
    const handY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])
    const fireY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])
    const auraY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"])

    return (
        <div ref={heroRef} className="relative w-full h-screen overflow-hidden bg-[#06090A]">
            <div className="relative w-full h-full max-w-[1500px] mx-auto px-8 flex">

                <div className="mt-13 ml-10 w-fit h-fit  leading-[0.8]">
                    <span className="text-9xl text-[#9A6BFF] font-bold ">Hello</span><br></br>
                    <span className="text-8xl text-white font-bold ">Call me <br></br>Web-Devloper</span>
                </div>
            <div className="absolute bottom-0 right-0 pointer-events-none z-20">
                <div  className="relative w-full h-full">
                   

                    <MotionImage
                        src={backfire}
                        alt="backfire"
                        width={500}
                        className="absolute bottom-25 right-30 z-0 opacity-70 blur-[1px]"
                        animate={{
                            opacity:[0.4,0.7,0.5],
                            y:[0,-12,0],
                            scale:[1,0.9,1]
                        }}
                        transition={{
                            duration:10,
                            repeat:Infinity,
                            ease:"easeInOut"
                        }}
                    />
                    
                        <Image
                            src={Aura}
                            alt="Aura"
                            width={600}
                            className="absolute bottom-[-100] right-25 z-5"
                        />
           
                        <MotionImage
                            src={stars}
                            alt="stars"
                            width={550}
                            className="absolute bottom-50 right-28 z-5"
                            animate={{x:[0,15,-10,0],
                                y:[0,-10,10,0]}}
                            transition={{
                                duration:10,
                                repeat:Infinity,
                                repeatType: "mirror",
                                ease: "linear"
                            }}
                        />

                    <MotionImage
                        src={hero}
                        alt="hero"
                        width={780}
                        height={500}
                        className="relative z-10"
                        animate={{y:[0,7,0]}}
                        transition={{
                            duration:4,
                            repeat:Infinity,
                            ease: "easeInOut"
                        }}

                    />

                        <MotionImage
                            src={hand}
                            alt="hand"
                            width={780}
                            className="absolute bottom-0 right-18 z-20"
                            animate={{y:[0,13,0]}}
                            transition={{
                                duration:4,
                                repeat:Infinity,
                                ease: "easeInOut"
                            }}
                        />

                </div>
            </div>
        </div>
    </div>
            
    )
}
