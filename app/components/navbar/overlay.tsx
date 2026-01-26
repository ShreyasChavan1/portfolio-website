import { FaEnvelope } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import Orbtrigger from "./orb";
import {motion , AnimatePresence, easeInOut} from 'framer-motion'

type navbarprops = {
    open: boolean,
    onToggle: ()=> void
}
const overlayVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
}

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: easeInOut,
    },
  },
}
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.06,
      duration: 0.3,
      ease: easeInOut,
    },
  }),
}

export default function Navbar({open,onToggle}:navbarprops){
    const handleclicks = (id:string) =>{
      if (id === "HOME") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    onToggle()
    return
  }
        const el = document.getElementById(id);
        if(!el)return 

        el.scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
        onToggle();
    }
    return (
        <AnimatePresence>
            {open && <motion.div 
            className="h-screen w-full bg-[#06090ad4] overflow-hidden backdrop-blur-md flex fixed inset-0 z-100"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden">
                <div className="absolute top-6 left-6 z-110 ">
            <Orbtrigger glow={true} scale={5} onClick={onToggle} />
        </div>


                <motion.div
                className="h-full max-w-[1500px] mx-auto p-5 relative flex items-end"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                    <div className="flex  w-screen justify-between">
                        <div className="flex flex-col">
                            {["HOME", "ABOUT", "SKILLS", "WORK" ,"CONTACT"].map((item, i) => (
                                <motion.span
                                   onClick={()=>handleclicks(item)}
                                    key={item}
                                    custom={i}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="text-8xl  hover:text-[100px] hover:text-purple-500 hover:cursor-pointer transition-all duration-400 ease-in-out"
                                >
                                    {item}
                                </motion.span>
                                ))}
                                                    </div>
                        <div className="flex flex-col gap-3">
                          <a href="https://www.linkedin.com/in/shreyas-chavan-25jan2004" target="_blank" rel="noopener noreferrer">
                            <div className="rounded-[360px] border-4 border-purple-500 w-30 h-30 flex items-center justify-center hover:scale-[1.05] transition-all duration-400 ease-in-out" >
                                <span className="text-6xl font-bold">in</span>
                            </div>
                          </a>
                          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chavanshreyas120@gmail.com" target="_blank" rel="noopener noreferrer">
                            <div className="rounded-[360px] border-4 border-purple-500 w-30 h-30 flex items-center justify-center hover:scale-[1.05] transition-all duration-400 ease-in-out" >
                                <FaEnvelope size={50} />
                            </div>
                          </a>
                          <a href="https://www.instagram.com/_shreyas_chavan__/" target="_blank" rel="noopener noreferrer">
                            <div className="rounded-[360px] border-4 border-purple-500 w-30 h-30 flex items-center justify-center hover:scale-[1.05] transition-all duration-400 ease-in-out" >
                                <FaInstagram size={50} />
                            </div>
                          </a>
                        </div>
                    </div>            
                </motion.div>
            </motion.div>}
        </AnimatePresence>
    )
}

