"use client"

import { useState } from "react"
import Orbtrigger from "./orb";
import Navbar from "./overlay";
export default function NavWrapper(){
    const [open,setOpen] = useState(false);
    return (
        <>
         <Orbtrigger onClick = {()=>setOpen(true)}/>
         <Navbar open={open} onClose={()=>setOpen(false)} />
        </>
    )
}