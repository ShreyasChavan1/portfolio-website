"use client"

import { useState } from "react"
import Orbtrigger from "./orb";
import Navbar from "./overlay";
import {FaBars} from 'react-icons/fa'

export  function Collapse({onClick}:{onClick:()=>void}){
    return(
        <div className="block text-white cursor-pointer" onClick={onClick}>
            <FaBars size={30}/>
        </div>
    )
}
export default function NavWrapper(){
    const [open,setOpen] = useState(false);
    const Toggle = () =>{
        setOpen(prev => !prev);
    }
    return (
        <>
        <section className="hidden md:block">
          
            <Orbtrigger glow={false} scale = {0} onClick = {Toggle}/>
            <Navbar open={open} onToggle={Toggle} />
        </section>
        <section className="block md:hidden fixed top-0  right-0 z-50 p-4">
            <Collapse onClick={Toggle}/>
            <Navbar open={open} onToggle={Toggle} />
        </section>
        </>
    )
}