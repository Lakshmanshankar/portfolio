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

      <section className={`lg:px-20 py-5 md:px-10 xl:w-/12 `}>
        <h2 className={`${data.colors[data.current].secondaryText} text-left text-lg lg:text-3xl lg:py-5 font-bold px-5`}>Projects</h2>
        {data.projects.map((project, id) => (
          <Link href={project.source} key={`projectid-${id}`}>
            <div key={`project-${id}`} className={`lg:p-5 mx-3 rounded-lg py-3 px-2 hover:${data.colors[data.current].hoverColor} hover:${data.colors[data.current].hoverBackground} ${data.current ? 'pinkify' : ''} og-background secondary-text hover:bg-opacity-50 animate-translate`}>
              <div className="flex w-fit h-fit items-end">
                <h3 className={` font-bold text-md md:text-ld lg:text-xl p-2 hover:transition-all pointer-events-none ${data.current ? 'pinkify' : ' '} secondary-text`}>{project.name}</h3>
                <div className={`${data.colors[data.current].primaryText} font-bold text-base text-opacity-70 pb-4`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-4 h-4 hover:transition-all hover:translate-x-2 translate-px">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
              <p className={`${data.colors[data.current].primaryText} p-2`}>{project.description}</p>
              <ul className="flex flex-wrap w-fit h-fit p-0 m-0">
                {project.technologies.map((tech, id) => (
                  <li className={`p-2 h-fit mx-1 px-2 mt-2 py-[4px] rounded-full ${data.current ? 'pinkify' : ''} background-current bg-opacity-90`} key={`tech-${id}`}>{tech}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </section>

      <section className={`lg:px-20 py-5 md:px-10 xl:w-/12 `}>
        <h2 className={`${data.colors[data.current].secondaryText} text-left text-lg lg:text-3xl lg:py-5 font-bold px-5`}>Experience</h2>
        {data.experience.map((job, id) => (
          <div key={`project-${id}`} className={`lg:p-5 mx-3 rounded-lg py-3 px-2 hover:${data.colors[data.current].hoverColor} hover:${data.colors[data.current].hoverBackground} ${data.current ? 'pinkify' : ''} og-background secondary-text hover:bg-opacity-50 `}>
            <div className="flex justify-between">
              <h3 className={` font-bold text-md md:text-ld lg:text-xl p-2 hover:transition-all pointer-events-none ${data.current ? 'pinkify' : ' '} secondary-text`}>{job.company}</h3>
              <div className={`flex items-center ${data.colors[data.current].primaryText} font-bold text-base text-opacity-70`}>
                <span className="mx-2 h-fit">{job.from}</span>
                <span className="mx-2 h-fit">{job.to}</span>
              </div>
            </div>
            <p className={`${data.colors[data.current].primaryText} p-2`}>{job.description}</p>
            <ul className="flex flex-wrap w-fit h-fit p-0 m-0">
              {job.skills.map((tech, id) => (
                <li className={`p-2 h-fit mx-1 mt-2 px-2 py-[4px] rounded-full ${data.current ? 'pinkify' : ''} background-current bg-opacity-90`} key={`tech-${id}`}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}
