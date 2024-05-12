import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import data from "./data.json";

import { IconsType, ModeToggle, RenderSocial } from "./v2/theme";

const brains = JetBrains_Mono({ weight: "400", subsets: ["greek"] });
export default function Home() {
  return (
    <div className="w-full sm:max-w-full md:max-w-3xl lg:max-w-2xl mx-auto relative colored">
      <nav className="top-0 fixed w-full flex justify-between md:max-w-3xl lg:max-w-2xl border-b backdrop-blur-md bg-opacity-0 secondary-border z-50">
        <div></div>
        <ul className="flex w-full justify-center ">
          {data.paths.map((path, id) => (
            <li className="py-3" key={`item-${id}`}>
              <a
                key={`path-${id + Math.random() * 23}`}
                href={path.path}
                className={`lg:p-3 p-2 py-5 text-base lg:text-md cursor-pointer hover:text-neutral-500 links`}
              >
                {path.name}
              </a>
            </li>
          ))}
        </ul>

        <ModeToggle />
      </nav>

      <main className="mt-14">
        <section className="flex align-middle mt-28 flex-col px-5 md:px-10 lg:px-0">
          <p
            className={`${brains.className} text-base text-center lg:text-left`}
          >
            👋 Hii, I am
          </p>
          <h1 className="gradient-red text-xl md:text-4xl font-extrabold text-center lg:text-left">
            LAKSHMANSHANKAR
          </h1>
          <h2 className="text-md md:text-xl my-1 text-center lg:text-left ">
            Full stack Developer
          </h2>{" "}
          <p className="primary-text lg:max-w-[80%] md:max-w-full text-center lg:text-left text-base">
            As a dedicated web app developer, I bring expertise in Web, Linux
            and cloud technologies.
          </p>
        </section>

        <section className={`py-10 px-5 md:px-10 lg:px-0`} id="about">
          <h2
            className={`colored text-left text-md lg:text-2xl  font-semibold`}
          >
            About
          </h2>
          <p className={`py-3 primary-text text-base text-justify `}>
            I'm a <b>full-stack developer</b> deeply immersed in web
            technologies, and my coding journey began amidst the COVID lockdown
            in <mark>2020</mark>. Starting with Python, I later ventured into
            web technologies during my second year of college. However, it was
            my fascination with <b>Operating Systems and Cloud Computing </b>
            that truly intrigued me, revealing the intricacies of deploying and
            maintaining apps at scale.
          </p>
          <p className={`py-3 primary-text text-base text-justify `}>
            With a solid understanding of programming languages like
            <b> Typescript</b>, <mark>Python</mark>, and <b>C++</b>, my
            programming skills and proficiency in data structures and algorithms
            have helped me tackle over <b>450 LeetCode problems.</b> This
            experience has provided me with diverse perspectives and refined my
            problem-solving skills.
          </p>

          <p className={`py-3 primary-text text-base text-justify `}>
            I started using Linux in <mark>January 2022;</mark> It's almost{" "}
            <b>2.5 years</b> into that and I enjoyed everything about Linux. I
            began with <mark>vim</mark> and moved to <mark>neovim</mark>, and{" "}
            {"my "}
            <Link
              href={"https://github.com/Lakshmanshankar/dotfiles"}
              className={`colored hover:cursor-alias underline`}
            >
              dotfiles
            </Link>
            {" repository"} had grown a lot since then. I love the awesome
            command line tools which make my developer workflow a breeze to work
            with. And I love <b>dark color schemes with gradient texts</b>; you
            can see them in all my works.
          </p>

          <p className={`py-3 primary-text text-base text-justify `}>
            Currently, I'm focused on enhancing my skills in{" "}
            <b>web technologies</b> and deepening my understanding of{" "}
            <b>data structures</b>. For further details, here's a link to{" "}
            {"my "}
            <Link
              href={data.resumeLink}
              download={true}
              className={`colored hover:cursor-alias underline`}
            >
              resume
            </Link>
          </p>
        </section>

        <section className={`px-5 md:px-10 lg:px-0`} id="project">
          <h2 className={`colored text-left text-md lg:text-2xl font-semibold`}>
            Projects
          </h2>
          <div className="border-none  md:border-l secondary-border my-3">
            {data.projects.map((project, id) => (
              <Link
                href={project.source}
                key={`projectid-${id}`}
                className="z-0"
                target="_blank"
              >
                <div
                  key={`project-${id}`}
                  className={`hover:transition-all hover:border hover:secondary-border  rounded-lg p-1 py-5 md:p-5`}
                >
                  <div className="flex w-fit h-full items-center">
                    <h3
                      className={`colored font-regular text-md md:text-sm lg:text-lg font-semibold`}
                    >
                      {project.name}
                    </h3>
                    <div
                      className={`font-bold text-base text-opacity-70 block`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 hover:transition-all hover:translate-x-2 translate-px"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                  <p
                    key={`desc=${id}`}
                    className={`py-3 primary-text text-base text-justify `}
                  >
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap w-fit h-fit p-0 m-0">
                    {project.technologies.map((tech, id) => (
                      <li
                        className={`p-2 h-fit mr-2 px-2 mt-2 py-[4px] rounded-full  background-current bg-opacity-30 secondary-border border `}
                        key={`project-${id}`}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className={`px-5 md:px-10 lg:px-0`} id="experience">
          <h2 className={`colored text-left text-md lg:text-2xl font-semibold`}>
            Experience
          </h2>
          {data.experience.map((experience, id) => (
            <div key={`project-${id}`} className={`rounded-lg p-1 md:p-5 py-5`}>
              <div className="flex justify-between">
                <div className="flex w-fit h-full items-center">
                  <h3
                    className={`colored font-regular text-md md:text-sm lg:text-lg font-semibold`}
                  >
                    <span className="text-base">{experience.company}</span>
                    <span className="primary-text text-base">
                      {" - "}
                      {experience.role}
                    </span>
                  </h3>
                </div>
                <div className="primary-text font-semibold">
                  {experience.from} - {experience.to}
                </div>
              </div>

              {experience.description.map((description) => (
                <p
                  key={`experience-desc ${id}`}
                  className={`py-3 primary-text text-base text-justify `}
                >
                  {description}
                </p>
              ))}
              <ul className="flex flex-wrap w-fit h-fit p-0 m-0">
                {experience.skills.map((skill, skillId) => (
                  <li
                    className={`p-2 h-fit mr-2 px-2 mt-2 py-[4px] rounded-full  background-current bg-opacity-30 secondary-border border `}
                    key={`tech-skill-${skillId}`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <hr className="secondary-border my-4" />
        <section
          className={`px-5 md:px-10 lg:px-0 border-l secondary-border mb-[20%] flex flex-col justify-between md:flex-row`}
        >
          <p className="primary-text flex my-1 justify-center lg:justify-start ">
            Copyright © {new Date().getFullYear()} All rights reserved
          </p>
          <ul className="flex my-1 justify-center lg:justify-start">
            {data.links.map((item, id) => (
              <Link href={item.link} className=" mx-1" key={`social-${id}`}>
                <RenderSocial socialName={item.name as IconsType} />
              </Link>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
