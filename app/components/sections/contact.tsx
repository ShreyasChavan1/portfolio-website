export default function Contact(){
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
        <div className="h-screen w-full overflow-hidden bg-[#06090A] flex">
            <div className="h-full max-w-[1500px] p-5 mx-auto grid grid-cols-[1fr_2fr] gap-3 relative mt-10">
                <div className="flex flex-col text-left leading-[0.9]">
                    <span className="text-[5rem] font-bold">Let's Build Something</span><br />
                    <span className="text-[5rem] font-bold text-purple-500">Great</span>
                </div>
                <div className="flex flex-col justify-center">
                    {
                        contacts.map((contact,i)=>{
                            return(
                                <>
                                    <span className="text-2xl text-purple-600">{contact.social}</span>
                                    <span className="text-2xl">{contact.handle}</span>
                                </>
                            )
                        })
                    }
                </div>
                <div className=" col-span-2 flex flex-col justify-end p-1">
                    <div>HOME ABOUT SKILLS</div>
                    <span className="text-[15rem] font-bold">SHREYAS C.</span>
                </div>
            </div>
        </div>
    )
}