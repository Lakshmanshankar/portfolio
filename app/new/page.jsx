import { Inter } from "next/font/google"
import data from "../data.json"
import Link from "next/link"

const interHeader = Inter({ weight: "900", subsets: ["cyrillic"] })
const inter = Inter({weight:"400",subsets:["greek"]})
export default function Home() {
    return (
        <div className="text-white w-full lg:py-24 py-14 bg-opacity-10 rounded-xl">
            <header className={`lg:px-20 px-5 ${inter.className}`}>
                <h1 className={`${data.colors[data.current].gradient} text-xl text-center lg:text-left lg:text-4xl xl:text-6xl gradient w-full ${interHeader.className}`}>{data.name.toUpperCase()}</h1>
                <h2 className={`${data.colors[data.current].secondaryText} text-center lg:text-left text-lg lg:text-3xl lg:py-5 font-bold`}>{data.role}</h2>
                <p className={`${data.colors[data.current].primaryText} text-center lg:text-left text-base md:text-xl lg:w-4/5 `}>{data.description}</p>
            </header>

            <section className={`lg:px-20 py-10 px-5 md:px-10 xl:w-10/12`}>
                <h2 className={`${data.colors[data.current].secondaryText} text-left text-lg lg:text-3xl lg:py-5 font-bold `}>About</h2>
                {data.about.map((item,id) => (
                    <p key={`${id}`} className={`py-3  ${data.colors[data.current].primaryText} text-base `}>{item}</p>
                ))}
                {data.resumeLink &&
                    <span className={`py-3  ${data.colors[data.current].primaryText} text-base !hover:${data.colors[data.current].hoverColor}`}>
                        Here is a link to my
                        <Link href={data.resumeLink} download={true}> Resume</Link>
                    </span>
                }
            </section>
        </div>
    )
}