import {easeInOut, motion,useInView,useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react'


export default function Skills() {
   const catref = useRef(null);
   const Inview = useInView(catref,{
    once:true
   })
    type Types = {
        category: string,
        tech: string[],
    }
    const skills: Types[] = [
        {
            category: "LANGUAGES",
            tech: ["C++","PYTHON","JAVASCRIPT"]

        },
        {
            category: "WEB-DEV",
            tech: ["FRAMER-MOTION","TAILWIND","NEXT.JS","HTML","MERN"]

        },
        {
            category: "BACKEND",
            tech: ["REDIS", "JWT-Auth", "REST APIS", "SQL/NOSQL", "WEBSOCKETS",]

        },
        {
            category: "DEVOPS",
            tech: [ "Github-Actions","DOCKER","AZURE","NGINX","GIT"]

        },

    ]
   
    return (
        <div className="md:h-full w-full bg-[rgb(6,9,10)] overflow-hidden text-center">
            <motion.div
            ref={catref}
            initial={ {y:30,opacity:0}}
            animate={Inview ? 
                {y:0,opacity:1} : {y:30,opacity:0}}
                transition={{
                    duration:2,
                    ease:easeInOut
                }}
            className='text-7xl md:text-9xl font-bold'>▸SKILLS◂</motion.div>
            {skills.map((cat, i) => {
                const heroRef = useRef(null)
                const {scrollYProgress} = useScroll({
                    target:heroRef,
                    offset:["start end","end start"]
                });
                const isEven = i % 2 === 0
                const direction = isEven ? "left" : "right"
                const x = useTransform(
                    scrollYProgress,
                    [0,1],
                    direction === "left" ? [-40,40] : [70,-30]
                )
                return (
                    <>
                        <div ref={heroRef} key={i} className="relative h-full max-w-[1500px] p-6 mx-auto flex items-center justify-around">
                        {i % 2 === 0 ?
                        <>
                                <motion.div 
                                key={i}
                                style={{x}}
                                className="[writing-mode:vertical-rl] rotate-180 text-6xl md:text-[120px] font-bold text-purple-400  relative">
                                    {cat.category}
                                </motion.div>
                                <div className="w-fit relative flex flex-col text-4xl md:text-[90px] font-bold md:font-semibold items-start justify-center">
                                    {cat.tech.map((tech, i) => {
                                   const total = tech.length
                                    const CENTER = 0.5
                                    const spread = 0.35
                                    const step = spread / total

                                    const centerPoint =
                                    CENTER - spread / 2 + i * step

                                    const start = centerPoint - 0.15
                                    const end = centerPoint

                                        const x = useTransform(
                                            scrollYProgress,
                                            [start,end],
                                            [-50,0]
                                        )
                                        const opacity = useTransform(
                                            scrollYProgress,
                                            [start,end],
                                            [0,1]
                                        )
                                        return (
                                            <>
                                                <motion.span
                                                style={{x,opacity}} key={i}
                                                className="">{tech}</motion.span>
                                            </>
                                        )
                                    })}
                                </div>
                        </>
                            :
                            <>
                                <div className="w-fit relative flex flex-col text-4xl md:text-[90px] md:font-semibold font-bold items-end justify-center ">
                                    {cat.tech.map((tech, i) => {
                                    const total = tech.length
                                    const CENTER = 0.5
                                    const spread = 0.35
                                    const step = spread / total

                                    const centerPoint =
                                    CENTER - spread / 2 + i * step

                                    const start = centerPoint - 0.15
                                    const end = centerPoint

                                        const x = useTransform(
                                            scrollYProgress,
                                            [start,end],
                                            [50,0]
                                        )
                                        const opacity = useTransform(
                                            scrollYProgress,
                                            [start,start + 0.2],
                                            [0,1]
                                        )
                                        return (
                                            <>
                                                <motion.span
                                                style={{x,opacity}} key={i}
                                                className="">{tech}</motion.span>
                                            </>
                                        )
                                    })}
                                </div>
                                <motion.div
                                style={{x}}
                                key={i}
                                className="[writing-mode:vertical-rl] text-6xl md:text-[120px] font-bold text-purple-400 relative">
                                    {cat.category}
                                </motion.div>
                            </>
                        }
                        </div>

                    </>
                )
            })}
        </div>
    )
}