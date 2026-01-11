"use client"
import orb from "@/app/assets/Gemini_Generated_Image_ixa2jmixa2jmixa2 (1).png"
import Image from "next/image"

type Orbtriggerprops = {
    onClick: () => void
}
export default function Orbtrigger({onClick} : Orbtriggerprops){
    return (
        <>
            <div onClick={onClick} className="fixed right-5 top-5">
                <Image
                    src={orb}
                    alt="orb"
                    width={80}
                />
            </div>
        </>
    )
}