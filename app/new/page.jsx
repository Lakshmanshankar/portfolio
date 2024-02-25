import { Inter } from "next/font/google"
import data from "../data.json"
import Link from "next/link"

const interHeader = Inter({ weight: "900", subsets: ["cyrillic"] })
const inter = Inter({ weight: "400", subsets: ["greek"] })
export default function Home() {
  return (
    <div className="text-white w-full lg:py-24 py-14 bg-opacity-10 rounded-xl bg-slate-950">
      <header className={`lg:px-20 px-5 ${inter.className}`}>
        <h1 className={`${data.colors[data.current].gradient} text-2xl text-center lg:text-left md:text-4xl lg:text-4xl xl:text-6xl gradient w-full ${interHeader.className}`}>{data.name.toUpperCase()}</h1>
        <h2 className={`${data.colors[data.current].secondaryText} text-center lg:text-left text-lg lg:text-3xl lg:py-5 font-bold`}>{data.role}</h2>
        <p className={`${data.colors[data.current].primaryText} text-center lg:text-left text-base md:text-xl lg:w-4/5 `}>{data.description}</p>
      </header>

      <section className={`lg:px-20 py-10 px-5 md:px-10 xl:w-/12`}>
        <h2 className={`${data.colors[data.current].secondaryText} text-left text-lg lg:text-3xl lg:py-5 font-bold `}>About</h2>
        {data.about.map((item, id) => (
          <p key={`${id}`} className={`py-3  ${data.colors[data.current].primaryText} text-base `}>{item}</p>
        ))}
        {data.resumeLink &&
          <span className={`py-3  ${data.colors[data.current].primaryText} text-base`}>
            Here is a link to my
            <Link href={data.resumeLink} download={true} className={`text-white hover:${data.colors[data.current].hoverColor}`}> Resume</Link>
          </span>
        }
      </section>

      <section className={`lg:px-20 py-10 md:px-10 xl:w-/12`}>
        <h2 className={`${data.colors[data.current].secondaryText} text-left text-lg lg:text-3xl lg:py-5 font-bold px-5`}>Projects</h2>
        {data.projects.map((project, id) => (
          <Link href={project.source} key={`projectid-${id}`}>
            <div key={`project-${id}`} className={`lg:p-5 mx-3 rounded-lg py-3 px-2 hover:${data.colors[data.current].hoverColor} hover:${data.colors[data.current].hoverBackground} hover:bg-opacity-10 ` }>
              <div className="flex justify-between">
                <h3 className={` font-bold text-md md:text-ld lg:text-xl p-2 hover:transition-all pointer-events-none`}>{project.name}</h3>
              </div>
              <p className={`${data.colors[data.current].primaryText} p-2`}>{project.description}</p>
              <ul className="flex justify-evenly w-fit h-fit p-0 m-0">
                {project.technologies.map((tech,id) => (
                  <li className={`p-2 hover:${data.colors[data.current].hoverColor} h-fit mx-1 px-2 py-[4px] rounded-full ${data.colors[data.current].selectBg} bg-opacity-10`} key={`tech-${id}`}>{tech}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </section>

      <section className={`lg:px-20 py-5 md:px-10 xl:w-/12 `}>
        <h2 className={`${data.colors[data.current].secondaryText} text-left text-lg lg:text-3xl lg:py-5 font-bold px-5`}>Experience</h2>
        {data.experience.map((job, id) => (
            <div key={`project-${id}`} className={`lg:p-5 mx-3 rounded-lg py-3 px-2 hover:${data.colors[data.current].hoverColor} hover:${data.colors[data.current].hoverBackground} hover:bg-opacity-10 ` }>
              <div className="flex justify-between">
                <h3 className={` font-bold text-md md:text-ld lg:text-xl p-2 hover:transition-all pointer-events-none`}>{job.company}</h3>
                <div className={`flex ${data.colors[data.current].primaryText} font-bold text-base text-opacity-70`}>
                <span className="mx-2 ">{job.from}</span>
                <span>{job.to}</span>
                </div>
              </div>
              <p className={`${data.colors[data.current].primaryText} p-2`}>{job.description}</p>
              <ul className="flex justify-evenly w-fit h-fit p-0 m-0">
                {job.skills.map((tech,id) => (
                  <li className={`p-2 hover:${data.colors[data.current].hoverColor} h-fit mx-1 px-2 py-[4px] rounded-full ${data.colors[data.current].selectBg} bg-opacity-10`} key={`tech-${id}`}>{tech}</li>
                ))}
              </ul>
            </div>
        ))}
      </section>



    </div>
  )
}
