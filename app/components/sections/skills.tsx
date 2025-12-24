

export default function Skills() {
    type Types = {
        category: string,
        tech: string[],
    }
    const skills: Types[] = [
        {
            category: "LANGUAGES",
            tech: ["JAVASCRIPT", "PYTHON", "C++"]

        },
        {
            category: "WEB-DEV",
            tech: ["MERN", "NEXT.JS", "HTML", "TAILWIND", "FRAMER-MOTION"]

        },
        {
            category: "BACKEND",
            tech: ["REDIS", "JWT Auth", "REST APIS", "SQL/NOSQL", "WEBSOCKETS",]

        },
        {
            category: "DEVOPS",
            tech: ["GIT", "NGINX", "AZURE", "DOCKER", "Github Actions"]

        },

    ]
    return (
        <div className="h-full w-full bg-[rgb(6,9,10)] overflow-hidden">
            {skills.map((cat, i) => {
                return (
                    <>
                        {i % 2 === 0 ?
                            <div className="relative h-full max-w-[1500px] p-6 mx-auto flex items-center justify-around">
                                <div className="[writing-mode:vertical-rl] rotate-180 text-9xl font-bold text-[#875edd]  relative">
                                    {cat.category}
                                </div>
                                <div className="w-fit relative flex flex-col text-8xl font-bold items-start justify-center">
                                    {cat.tech.map((tech, i) => {
                                        return (
                                            <>
                                                <span className="">{tech}</span>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            :
                            <div className="relative h-full max-w-[1500px] p-6 mx-auto flex items-center justify-around">
                                <div className="w-fit relative flex flex-col text-8xl font-bold items-end justify-center ">
                                    {cat.tech.map((tech, i) => {
                                        return (
                                            <>
                                                <span className="">{tech}</span>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className="[writing-mode:vertical-rl] text-9xl font-bold text-[#875edd]  relative">
                                    {cat.category}
                                </div>
                            </div>
                        }

                    </>
                )
            })}
        </div>
    )
}