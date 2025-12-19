import side_frame from "@/app/assets/side_frame.png"
import Image from "next/image"
import body from "@/app/assets/temp_body.png"
import who from '@/app/assets/who-am-i.png'

export default function About() {
    return (
        <div className="h-screen w-full overflow-hidden bg-[#06090A] flex">
            <div className="relative h-full w-full  max-w-[1500px] flex  items-center">
                <div className="h-full w-auto text-purple-400 font-bold text-[110px] relative flex items-center ">
                <Image
                    src={side_frame}
                    alt="sidefrmae"
                    width={680}
                    height={300}
                    className="relative"
                />
                <Image
                    src={body}
                    alt="body"
                    width={600}
                    height={300}
                    className="absolute left-13 z-20"
                /> 
                    <span className="[writing-mode:vertical-rl] rotate-180 absolute left-25">WHO AM I</span>
                </div>

            <div className="relative ml-5 w-max-[200] flex flex-col items-start justify-center ">
                <h1 className="font-bold text-7xl">SHREYAS C.</h1>
                <h3 className="font-bold text-2xl text-[#875edd] tracking-[0.5rem]">Fullstack Dev</h3>
                <hr className="bg-amber-50 w-full border-[0.5] mt-2" />
                <p className="max-w-prose text-3xl mt-5 font-extralight tracking-widest">
                    I build modern, fast, and minimal interfaces
                    using React, Next.js, JavaScript, and design-first thinking.
                    I like mixing solid fundamentals with
                    creative interactions to make products feel
                    smooth, not just functional.
                </p>
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