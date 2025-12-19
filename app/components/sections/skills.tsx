import { HtmlHTMLAttributes } from "react"

export default function Skills(){
    // type Types = {
    //     category:string,
    //     tech:string[],
    // }
    // const skills:Types[]=[
    //     {
    //         category:"LANGUAGES",
    //         tech:["JAVASCRIPT","PYTHON","C++"]
    //     },
    //     {
    //         category:"WEB-DEV",
    //         tech:["MERN","NEXT.JS","HTML","TAILWIND","FRAMER-MOTION"]
    //     },
    //     {
    //         category:"BACKEND",
    //         tech:["SQL/NOSQL","REST APIS","WEBSOCKETS","JWT Auth","REDIS"]
    //     },
    //     {
    //         category:"DEVOPS",
    //         tech:["Github Actions","NGINX","AZURE","DOCKER","GIT"]
    //     },

    // ] 
    // function custom_translate(word:string):string{
    //     const size:number = word.length
        
    //     return ""
    // }
    return(
        <div className="h-full w-full bg-[rgb(6,9,10)] overflow-hidden">
            <div className="relative h-full max-w-[1500px] p-6 mx-auto flex items-center justify-around">
                <div className="[writing-mode:vertical-rl] rotate-180 text-9xl font-bold text-[#875edd]  relative">
                        LANGUAGES
                </div>
                <div className="w-fit relative flex flex-col text-8xl font-bold items-end justify-center ">
                    <span className="">JAVASCRIPT</span>
                    <span className="-translate-x-80">PYTHON</span>
                    <span className="-translate-x-150">C++</span>
                </div>
            </div>
            <div className="relative h-full max-w-[1500px] p-6 mx-auto flex items-center justify-around">
                <div className="w-fit relative flex flex-col text-8xl font-bold items-end justify-center ">
                    <span className="-translate-x-120">MERN</span>
                    <span className="-translate-x-100">NEXT</span>
                    <span className="-translate-x-80">HTML</span>
                    <span className="-translate-x-50">TAILWIND</span>
                    <span className="">FRAMER-MOTION</span>
                </div>
                <div className="[writing-mode:vertical-rl] text-9xl font-bold text-[#875edd]  relative">
                        WEB-DEV
                </div>
            </div>
        </div>
    )
}