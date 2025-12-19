"use client"
import Image from "next/image"
import hero from "@/app/assets/4kfullbody (1).png"
import hand from "@/app/assets/4khand.png"
import backfire from "@/app/assets/firecutout.png"
import Aura from "@/app/assets/aura.png"
import stars from "@/app/assets/stars.png"
import Fire from "./fire"
import About from "./about"
export default function Hero() {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#06090A]">
            <div className="relative w-full h-full max-w-[1500px] mx-auto px-8 flex">

                <div className="mt-13 ml-10 w-fit h-fit  leading-[0.8]">
                    <span className="text-9xl text-[#9A6BFF] font-bold ">Hello</span><br></br>
                    <span className="text-8xl text-white font-bold ">Call me <br></br>Web-Devloper</span>
                </div>
            <div className="absolute bottom-0 right-0 pointer-events-none z-20">
                <div className="relative w-full h-full">
                    <Image
                        src={backfire}
                        alt="backfire"
                        width={500}
                        className="absolute bottom-25 right-30 z-0"
                    />
                    <Image
                        src={Aura}
                        alt="Aura"
                        width={600}
                        className="absolute bottom-[-100] right-25 z-5"
                    />
                    <Image
                        src={stars}
                        alt="stars"
                        width={550}
                        className="absolute bottom-50 right-28 z-5"
                    />
                    <Image
                        src={hero}
                        alt="hero"
                        width={780}
                        height={500}
                        className="relative z-10"
                    />
                    <Image
                        src={hand}
                        alt="hand"
                        width={780}
                        className="absolute bottom-0 right-18 z-20"
                    />
                </div>
            </div>
        </div>
    </div>
            
    )
}
