import {motion,useInView,useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react'


export default function Skills() {
   
    type Types = {
        category: string,
        tech: string[],
    }
    const skills: Types[] = [
        {
            category: "LANGUAGES",
            tech: ["C++", "PYTHON", "JAVASCRIPT"]

        },
        {
            category: "WEB-DEV",
            tech: ["MERN", "HTML", "NEXT.JS", "TAILWIND", "FRAMER-MOTION"]

        },
        {
            category: "BACKEND",
            tech: ["REDIS", "JWT-Auth", "REST APIS", "SQL/NOSQL", "WEBSOCKETS",]

        },
        {
            category: "DEVOPS",
            tech: ["GIT", "NGINX", "AZURE", "DOCKER", "Github-Actions"]

        },

    ]
    return (
        <div className="h-full w-full bg-[rgb(6,9,10)] overflow-hidden">
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
                    direction === "left" ? [-150,150] : [150,-150]
                )
                return (
                    <>
                        <div ref={heroRef} key={cat.category} className="relative h-full max-w-[1500px] p-6 mx-auto flex items-center justify-around">
                        {i % 2 === 0 ?
                        <>
                                <motion.div 
                                style={{x}}
                                className="[writing-mode:vertical-rl] rotate-180 text-9xl font-bold text-[#875edd]  relative">
                                    {cat.category}
                                </motion.div>
                                <div className="w-fit relative flex flex-col text-8xl font-bold items-start justify-center">
                                    {cat.tech.map((tech, i) => {
                                    const total = tech.length
                                    const gap = 1 / (total + 1)

                                    const start = gap * i
                                    const end = start + gap * 1.2

                                        const x = useTransform(
                                            scrollYProgress,
                                            [start,end],
                                            ["-30vw","0vw"]
                                        )
                                        const opacity = useTransform(
                                            scrollYProgress,
                                            [start,end],
                                            [0,1]
                                        )
                                        return (
                                            <>
                                                <motion.span
                                                style={{x,opacity}}
                                                className="">{tech}</motion.span>
                                            </>
                                        )
                                    })}
                                </div>
                        </>
                            :
                            <>
                                <div className="w-fit relative flex flex-col text-8xl font-bold items-end justify-center ">
                                    {cat.tech.map((tech, i) => {
                                       const total = tech.length
                                    const gap = 1 / (total + 1)

                                    const start = gap * i
                                    const end = start + gap * 1.2

                                        const x = useTransform(
                                            scrollYProgress,
                                            [start,end],
                                            ["30vw","0vw"]
                                        )
                                        const opacity = useTransform(
                                            scrollYProgress,
                                            [start,start + 0.2],
                                            [0,1]
                                        )
                                        return (
                                            <>
                                                <motion.span
                                                style={{x,opacity}}
                                                className="">{tech}</motion.span>
                                            </>
                                        )
                                    })}
                                </div>
                                <motion.div
                                style={{x}}
                                className="[writing-mode:vertical-rl] text-9xl font-bold text-[#875edd]  relative">
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