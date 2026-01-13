"use client"
import orb from "@/app/assets/Gemini_Generated_Image_ixa2jmixa2jmixa2 (1).png"
import Image from "next/image"
import {motion} from 'framer-motion'

type Orbtriggerprops = {
    onClick: () => void
}
export default function Orbtrigger({onClick} : Orbtriggerprops){
    const MotionImage = motion(Image)
    return (
        <>
            <div onClick={onClick} className="fixed right-5 top-5 z-55">
                <MotionImage
                    src={orb}
                    alt="orb"
                    width={80}
                    animate={{
                        rotate:360
                    }}
                    transition={{
                        ease:"linear",
                        repeat:Infinity,
                        duration:15
                    }}
                    // style={{transformStyle:"preserve-3d"}}
                />
            </div>
        </>
    )
}