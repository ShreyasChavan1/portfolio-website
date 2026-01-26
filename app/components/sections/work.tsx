import Image, { StaticImageData } from "next/image";
import leetclone from '@/app/assets/leetclone.png'
import chatbot from '@/app/assets/chatbot.png'
import sorter from '@/app/assets/sorter.png'
import { useEffect, useRef, useState } from "react";
import {easeInOut, motion , useInView}from 'framer-motion'

function Project_preview({
        image,
        video,
        alt
    }:{
        image:StaticImageData,
        video:string,
        alt:string
    }){
        const videoRef = useRef<HTMLVideoElement>(null)
        return(
            <div className="relative group inline-block"
                
                onMouseEnter={() => videoRef.current?.play()}
                onMouseLeave={() => {
                    if (!videoRef.current) return
                    videoRef.current.pause()
                    videoRef.current.currentTime = 0
                }}>
                <Image
                    src={image}
                    alt={alt}
                    // width={1856}
                    // height={898}
                    className="rounded-lg object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <video
                    ref={videoRef}
                    src={video}
                    muted
                    playsInline
                    className="absolute rounded-lg inset-0 w-full h-full object-cover opacity-0 
                                transition-opacity duration-300 group-hover:opacity-100"
                />
            </div>
        )
    }
function Project_mobile_preview({image,alt}:{image:StaticImageData,alt:string}){
    return(
        <div className="">
        <Image
                    src={image}
                    alt={alt}
                    width={500}
                    className="rounded-lg"
                />
        </div>
    )
}
export default function Work(){
    const catref = useRef(null);
       const Inview = useInView(catref,{
        once:true
       })
    type Projects_type = {
        title: string,
        techs: string[]
    }
    const projects:Projects_type[] =[
        {
            title: "LeetClone",
            techs: ["MERN","Docker","Redis","mongoDB","Azure"]
        },
        {
            title: "Chat Bot",
            techs: ["MERN","Gemini API"]
        },
        {
            title: "Sorting Visualizer",
            techs:["MERN","FireBase"]
        }
    ]
    const leetclone_app = projects.find(e=>e.title === "LeetClone");
    const gemini_app = projects.find(e=>e.title === "Chat Bot");
    const sorting_app = projects.find(e=>e.title === "Sorting Visualizer")
    
    
    return (
        <div className="h-full w-full bg-[#06090A] flex flex-col text-center overflow-hidden  md:mx-0">
            <motion.span  
            ref={catref}
            animate={Inview ? 
                {y:0,opacity:1} : {y:20,opacity:0}}
                transition={{
                    duration:2,
                    ease:easeInOut
                }}
            className='text-7xl md:text-9xl font-bold '>▸WORK◂</motion.span>
            <div className="h-full max-w-[1500px] mx-auto flex flex-col gap-5 relative items-center">
                <div className="relative w-[90vw] md:w-[75vw] flex flex-col gap-2 hover:scale-y-[1.02] transition-y duration-500 ease-out mt-5">
                    <a href="https://www.leetclone.tech/" target="_blank" className="cursor-pointer"> 
                        <div className="hidden md:block">
                            <Project_preview image={leetclone} video="/videos/leetclone_demo.mp4" alt="leetclone" />
                        </div>

                        <div className="block md:hidden">
                            <Project_mobile_preview image={leetclone} alt="leetclone" />
                        </div>

                    </a>

                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="font-bold text-2xl md:text-4xl text-left">LeetClone</div>
                        <div className="flex gap-1">
                            {leetclone_app?.techs.map((value,i)=>{
                                return (
                                    <>
                                    <span className="border border-[#424242] rounded-lg p-1 md:p-2 text-x">{value}</span>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                </div>


                <div className="relative md:w-[77vw] flex-row md:flex  gap-2 items-center">
                    <div className="flex flex-col gap-3  md:w-[50vw] 
    transition-[width] duration-500 ease-out m-5 md:m-0"> 
                        <a href="https://shreyaschavan1.github.io/Prompt-GPT/" target="_blank" className="cursor-pointer">
                            <div className="hidden md:block">
                                <Project_preview image={chatbot} video="/videos/gemini_preview.mp4" alt="chatbot" />
                            </div>

                            <div className="block md:hidden">
                                <Project_mobile_preview image={chatbot} alt="chatbot" />
                            </div>

                        </a>
                        <div className="flex gap-2 ">
                            <div className="font-bold text-2xl">Chat Bot</div>
                            <div className="flex gap-2">
                                {gemini_app?.techs.map((value, i) => {
                                    return (
                                        <>
                                            <span className="border border-[#424242] rounded-lg p-2 text-xs">{value}</span>
                                        </>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2  md:w-[50vw] 
    transition-[width] duration-500 ease-out m-5 md:m-0"> 
                        <a href="https://shreyaschavan1.github.io/Sorting_Visualizerr/" target="_blank">
                            <div className="hidden md:block">
  <Project_preview image={sorter} video="/vidoes/sorter.mp4" alt="sorter" />
</div>

<div className="block md:hidden">
  <Project_mobile_preview image={sorter} alt="sorter" />
</div>

                        </a>
                         <div className="flex gap-2">
                            <div className="font-bold text-2xl">Sorting Visualizer</div>
                            <div className="flex gap-2">
                                {sorting_app?.techs.map((value, i) => {
                                    return (
                                        <>
                                            <span className="border border-[#424242] rounded-lg p-2 text-xs">{value}</span>
                                        </>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    ) 
}
