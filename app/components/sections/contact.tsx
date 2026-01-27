import { useRef } from "react"
import Fire from "./fire"
import {easeInOut, motion , useInView} from 'framer-motion'
export default function Contact(){
    const ConRef = useRef(null)
    const Inview = useInView(ConRef,{
        once:true,
        // margin:"-50% 0px -50% 0px"
    })
    const Nvarients = {
        hidden:{
            y:50,
            opacity:0
        },
        visible:{
            y:0,
            opacity:1,
            transition:{
                duration:2,
                ease:easeInOut
            }
        }
    }
    type cont_type = {
        social:string,
        handle:string
    }
    const contacts:cont_type[] = [
        {
            social:"Email",
            handle:"chavanshreyas120@gmail.com"
        },
        {
            social:"LinkedIn",
            handle:"www.linkedin.com/in/shreyas-chavan-25jan2004"
        },
        {
            social:"Github",
            handle:"github.com/ShreyasChavan1"
        },

    ]
    return (
        <div className="md:h-screen w-full overflow-hidden bg-[#06090A] flex">
            <div className="h-fit md:h-full  md:max-w-[1500px] p-5 mx-auto grid grid-cols-2 gap-3 relative mt-10">
                <div className="flex justify-center ">
                    <div className="flex flex-col text-left leading-[0.9]  relative w-110">
                        <span className="md:text-[5rem] text-[2rem] font-bold">Let's Build Something</span>
                        <span className="md:text-[5rem] text-[2rem] font-bold text-purple-400">Great</span>
                    </div>
                </div>
                <div className="flex flex-col md:justify-between gap-3">
                    {
                        contacts.map((contact,i)=>{
                            return(
                                <div className="text-xs md:text-2xl" key={i}>
                                    {contact.social === "LinkedIn" || contact.social === "Github" ? 
                                    <>
                                        <span className=" text-purple-500">{contact.social}</span><br />
                                        <a href={`https://${contact.handle}`} target="_blank">
                                        <span className="">{contact.handle}</span>
                                        </a>
                                    </>: 
                                    <>
                                        <span className=" text-purple-500">{contact.social}</span><br />
                                        <span className="">{contact.handle}</span>
                                    </>
                        }
                                </div>
                            )
                        })
                    }
                </div>
                <div ref={ConRef} className=" col-span-2 flex flex-col justify-end p-1 text-center">
                    {/* <div>HOME ABOUT SKILLS</div> */}
                    <motion.span 
                    variants={Nvarients}
                    animate={
                        Inview ? 
                        "visible":
                        "hidden"
                    }
                    transition={{
                        duration:2,
                        ease:easeInOut
                    }}
                    className="md:text-[14rem] text-[4rem] font-bold">SHREYAS C.</motion.span>
                </div>
                {/* <Fire/> */}
            </div>
        </div>
    )
}