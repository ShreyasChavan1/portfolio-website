import hellfire from "@/app/assets/fire.png"
import Image from "next/image"

export default function Fire(){
    return(
        <>
        <div className="absolute bottom-[-380] opacity-40 w-full z-20">
            <Image
                src={hellfire}
                alt="hellfire"
                width={1500}
                height={300}
            />
            
        </div>
        </>
    )
}