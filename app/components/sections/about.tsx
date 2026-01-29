import side_frame from "@/app/assets/side_frame.png"
import Image from "next/image"
import me from '@/app/assets/maimage.png'
import m1 from '@/app/assets/maimage1.png'

import {useScroll, motion ,useInView,easeInOut} from 'framer-motion'
import { useRef , useState , useEffect} from "react"


const MotionImage = motion(Image)
export default function About() {
    const heroRef = useRef(null)
    const Inview = useInView(heroRef,{
        once:true,
        margin:"-50% 0px -50% 0px"
    })
    const slideVariant = {
    hidden: {
        x: 30,
        opacity:0
    },
    visible: {
        x: 0,
        opacity:1,
        transition: {
        duration: 2,
        ease: easeInOut,
        },
    },
}

    return (
        <div ref={heroRef} className="relative h-fit md:w-full overflow-hidden bg-[#06090A] flex">
            <div className="relative w-full  max-w-[1300px] mx-auto flex flex-col md:flex-row items-center md:justify-center ">
                <div className="md:h-full w-auto text-purple-400 font-bold text-6xl  md:text-[110px] relative flex items-center">

                    <motion.span
                    variants={slideVariant}
                    animate={
                        Inview ? 
                        "visible":
                        "hidden"
                    }
                    transition={{
                        duration:2,
                        ease:"easeInOut"
                    }} className="md:[writing-mode:vertical-rl] md:rotate-180 md:absolute text-5xl md:text-9xl   mt-0  md:left-25">WHO AM I</motion.span>
                </div>
            
            <div className="relative m-4 md:m-5 md:mt-10 w-max-[200px] flex flex-col items-start justify-center ">
                <h1 className="font-bold text-3xl md:text-7xl">SHREYAS C.</h1>
                <h3 className="font-bold text-1xl md:text-2xl text-[#875edd] tracking-[0.4rem] md:tracking-[0.5rem] ">Fullstack Dev</h3>
                <hr className="bg-amber-50 w-full border-[0.5] mt-2" />
                <p className="max-w-prose text-[20px] md:text-3xl mt-2 md:mt-5 font-medium md:font-extralight md:tracking-wider leading-[1.2] md:leading-none">
                    I build modern, fast, and minimal interfaces
                    using React, Next.js, JavaScript, and design-first thinking.
                    I like mixing solid fundamentals with
                    creative interactions to make products feel
                    smooth, not just functional.
                </p>
            </div>
            <div className="hidden md:block w-130">
                <MotionImage
                variants={slideVariant}
                animate={Inview ? "visible" : "hidden"}
                src={me}
                alt="me"
                
                style={{ width: 400}}
                className="rounded-lg " />
            </div>
            <div className="block md:hidden m-3">
                <MotionImage
                variants={slideVariant}
                animate={Inview ? "visible" : "hidden"}
                src={m1}
                alt="me"
                style={{ width: 370 }}
                className="rounded-lg object-cover"/>
            </div>
            </div>
        </div>
    )
}

{/* <div className="w-250 h-200 relative">
                    <Image
                        src={who}
                        alt="whoami"
                        width={100}
                        className="h-130 absolute top-20 left-30"
                    /> */}
                {/* <Image
                    src={body}
                    alt="body"
                    width={600}
                    height={300}
                    className="absolute left-13 top-14 z-20"
                /> */}