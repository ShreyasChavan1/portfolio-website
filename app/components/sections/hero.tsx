"use client"
import Image from "next/image"
import hero from "@/app/assets/4kfullbody (1) (1) (1).png"
import hand from "@/app/assets/4khand.png"
import backfire from "@/app/assets/firecutout.png"
import Aura from "@/app/assets/aura.png"
import stars from "@/app/assets/stars.png"
import { useRef } from "react"
import {easeInOut, motion,useScroll,useTransform} from 'framer-motion'

export default function Hero() {
    const MotionImage = motion(Image)

    const { scrollYProgress } = useScroll();
    const progress = useTransform(scrollYProgress, [0, 0.35], [0, 1])

    const handY = useTransform(progress, [0, 1], ["0%", "-20%"])
    const fireY = useTransform(progress, [0, 1], ["0%", "-15%"])
    const bodyY = useTransform(progress, [0, 1], ["0%", "-15%"])
    const auraY = useTransform(progress, [0, 1], ["0%", "-8%"])
    const textY = useTransform(progress, [0, 1], ["0%", "-5%"])
    return (
        <div className="relative w-full h-full md:h-screen overflow-hidden bg-[#06090A]">
            <div className="relative w-full h-full md:h-full max-w-[1500px] mx-auto px-2 md:px-8 flex">
                <div className="mt-13 ml-3 md:ml-10 w-fit h-fit  ">
                    <span className="text-5xl md:text-9xl text-purple-400 font-bold leading-[0.8]">Hello</span><br></br>
                    <span className="text-5xl md:text-[120px] text-white font-bold leading-[0.9]">Call me <br></br>Web-Devloper</span>
                </div>
            <div className="absolute bottom-0 right-0 pointer-events-none z-20 hidden md:block">
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
                            style={{y:handY}}
                            // animate={{y:[0,13,0]}}
                            // transition={{
                            //     duration:4,
                            //     repeat:Infinity,
                            //     ease: "easeInOut"
                            // }}
                        />
                </div>
            </div>
        </div>
    </div>
            
    )
}
