"use client"

import { useState } from "react"
import Orbtrigger from "./orb";
import Navbar from "./overlay";
export default function NavWrapper(){
    const [open,setOpen] = useState(false);
    const Toggle = () =>{
        setOpen(prev => !prev);
    }
    return (
        <>
         <Orbtrigger onClick = {Toggle}/>
         <Navbar open={open} onToggle={Toggle} />
        </>
    )
}