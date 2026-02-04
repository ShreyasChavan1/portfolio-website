import Image from "next/image"
import me from '@/app/assets/maimage.png'
import m1 from '@/app/assets/maimage1.png'

import {motion ,useInView,easeInOut} from 'framer-motion'
import { useRef } from "react"


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
        <div ref={heroRef} className="relative h-fit lg:h-screen md:h-screen lg:w-full md:w-full overflow-hidden bg-[#06090A] flex">
            <div className="relative w-full  max-w-[1300px] mx-auto flex flex-col lg:flex-row md:flex-row items-center lg:justify-center md:justify-center ">
                <div className="lg:h-full md:h-full w-auto text-purple-600 font-bold text-6xl  lg:text-[110px] md:text-[90px] relative flex items-center opacity-[0.6]">

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
                    }} className="lg:[writing-mode:vertical-rl] md:[writing-mode:vertical-rl] lg:rotate-180 md:rotate-180 lg:absolute md:absolute text-5xl lg:text-9xl md:text-8xl   mt-0  lg:left-25 md:left-20">WHO AM I</motion.span>
                </div>
            
            <div className="relative m-4 lg:m-5 md:m-4 lg:mt-10 md:mt-8 w-max-[200px] flex flex-col items-start justify-center ">
                <h1 className="font-bold text-3xl lg:text-7xl md:text-6xl">SHREYAS C.</h1>
                <h3 className="font-bold text-1xl lg:text-2xl md:text-xl text-[#875edd] tracking-[0.4rem] lg:tracking-[0.5rem] md:tracking-[0.4rem] ">Fullstack Dev</h3>
                <hr className="bg-amber-50 w-full border-[0.5] mt-2" />
                <p className="max-w-prose text-[20px] lg:text-3xl md:text-2xl mt-2 lg:mt-5 md:mt-4 font-medium lg:font-extralight md:font-light lg:tracking-wider md:tracking-wide leading-[1.2] lg:leading-none md:leading-tight">
                    I build modern, fast, and minimal interfaces with React, Next.js, and JavaScript, supported by solid backend architecture and design-first thinking. I mix fundamentals with creative interactions so products feel smooth, not just functional.
                </p>
            </div>
            <div className="hidden lg:block md:block w-130 hover:scale-[1.03] transition-all duration-300">
                <MotionImage
                variants={slideVariant}
                animate={Inview ? "visible" : "hidden"}
                src={me}
                alt="me"
                
                style={{ width: 400}}
                className="rounded-lg " />
            </div>
            <div className="block lg:hidden md:hidden m-3 lg:m-3 md:m-2">
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