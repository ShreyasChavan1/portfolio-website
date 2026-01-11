import { FaEnvelope } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import Orbtrigger from "./orb";

type navbarprops = {
    open: boolean,
    onToggle: ()=> void
}
export default function Navbar({open,onToggle}:navbarprops){
    if(!open)return null;
    return (
        <div className="h-screen w-full bg-[#06090ad4] overflow-hidden backdrop-blur-md flex fixed inset-0 z-100">
             <div className="absolute top-6 left-6 z-110">
        <Orbtrigger onClick={onToggle} />
      </div>


            <div  className="h-full max-w-[1500px] mx-auto p-5 relative flex items-end">
                <div className="flex  w-screen justify-between">
                    <div className="flex flex-col">
                        <span className="text-8xl text-purple-400">HOME</span>
                        <span className="text-8xl">ABOUT</span>
                        <span className="text-8xl">SKILLS</span>
                        <span className="text-8xl">CONTACT</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="rounded-[360px] border-4 border-purple-500 w-30 h-30 flex items-center justify-center" >
                            <span className="text-6xl font-bold">in</span>
                        </div>
                        <div className="rounded-[360px] border-4 border-purple-500 w-30 h-30 flex items-center justify-center" >
                            <FaEnvelope size={50} />
                        </div>
                        <div className="rounded-[360px] border-4 border-purple-500 w-30 h-30 flex items-center justify-center" >
                            <FaInstagram size={50} className="" />
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}

