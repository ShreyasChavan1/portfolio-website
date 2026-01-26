"use client"
import orb from "@/app/assets/Gemini_Generated_Image_ixa2jmixa2jmixa2 (1).png"
import Image from "next/image"
import {motion} from 'framer-motion'
import glowed from '@/app/assets/unnamed.png'

type Orbtriggerprops = {
    glow:boolean
    onClick: () => void,
    scale: number
}
export default function Orbtrigger({glow,onClick,scale} : Orbtriggerprops){
    const MotionImage = motion(Image)
    return (
        <>
            <div onClick={onClick} className="fixed right-5 top-5 z-55">
                <MotionImage
                    src={glow? glowed : orb}
                    alt="orb"
                    width={80 + scale}
                    animate={{
                        rotate:360
                    }}
                    transition={{
                        ease:"linear",
                        repeat:Infinity,
                        duration:15
                    }}
                    className="hover:scale-[1.07] transition-all duration-400 ease-out"
                    // style={{transformStyle:"preserve-3d"}}
                />
            </div>
        </>
    )
}