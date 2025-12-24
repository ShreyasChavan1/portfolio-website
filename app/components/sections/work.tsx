import Image from "next/image";
import leetclone from '@/app/assets/leetclone.png'
import chatbot from '@/app/assets/chatbot.png'
import sorter from '@/app/assets/sorter.png'
export default function Work(){
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
        <div className="h-full w-full bg-[#06090A] flex overflow-hidden">
            <div className="h-full max-w-[1500px] mx-auto flex flex-col gap-5 relative items-center">
                <div className="relative w-[75vw] flex flex-col gap-2">
                    <div> 
                        <Image
                            src={leetclone}
                            alt="leetclone"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex gap-2">
                        <div className="font-bold text-4xl">LeetClone</div>
                        <div className="flex gap-2">
                            {leetclone_app?.techs.map((value,i)=>{
                                return (
                                    <>
                                    <span className="border border-[#424242] rounded-lg p-2 text-xl">{value}</span>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                </div>


                <div className="relative w-[77vw] flex gap-2 items-center">
                    <div className="flex flex-col gap-3"> 
                        <Image
                            src={chatbot}
                            alt="chatbot"
                            className="rounded-lg"
                        />
                        <div className="flex gap-2">
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
                    <div className="flex flex-col gap-2"> 
                        <Image
                            src={sorter}
                            alt="sorter"
                            className="rounded-lg" 
                        />
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

{/* <video
                            src={"..../public/videos/leetclone_demo.mp4"}
                            autoPlay
                            loop
                            muted
                            playsInline
                        /> */}