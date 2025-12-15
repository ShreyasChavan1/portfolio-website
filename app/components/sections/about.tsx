import side_frame from "@/app/assets/side_frame.png"
import Image from "next/image"
import body from "@/app/assets/temp_body.png"
import who from '@/app/assets/who-am-i.png'

export default function About(){
    return(
        <div className="relative h-screen  w-full overflow-hidden bg-[#06090A] flex">
            <Image
                src={side_frame}
                alt="sidefrmae"
                width={600}
                height={300}
                className="absolute h-160 top-10"
            />
            <div className="relative h-screen w-full mx-auto max-w-[1500px] p-8 flex  z-0">
                {/* <span className="absolute -left-30 top-1/2 -translate-y-1/2 rotate-90 
              text-purple-400 font-bold tracking-widest text-[100px]">
                    WHO AM I
                </span> */}
                <div className="w-250 h-200 relative">
                    <Image
                        src={who}
                        alt="whoami"
                        width={100}
                        className="h-130 absolute top-20 left-30"
                    />
                {/* <Image
                    src={body}
                    alt="body"
                    width={600}
                    height={300}
                    className="absolute left-13 top-14 z-20"
                /> */}
                </div>
                <div className="relative h-150 w-350 mt-5 mr-10 p-10 flex flex-col items-start justify-center">
                    <span className="font-bold text-7xl">SHREYAS C.</span>
                    <span className="font-bold text-2xl text-[#875edd] tracking-[0.5rem]">Fullstack Dev</span>
                    <hr className="bg-amber-50 w-full border-[0.5] mt-2"/>
                    <p className="w-150 text-3xl mt-5 font-light tracking-widest">
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