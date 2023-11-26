"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ weight: "400", subsets: ["latin"] });
export default function HomePage() {
  return (
    <>
      <section className="relative py-10 md:py-0" id="about">
        <Link href="#about" className='  text-lg pointer-events-auto cursor-pointer sticky'> About</Link>
        <div className="  md:text-lg lg:pb-24 py-10 px-8 md:pr-8 lg:px-0 lg:w-5/6 text-slate-400 ">
          <span className={` text-md md:text-lg block ${inter.className}`}>
            I'm a recent Computer Science grad. I began coding with Python in
            2020, explored web development with JavaScript, and was fascinated
            by Linux and cloud things in my fourth semester. It opened my
            eyes to how apps are deployed and maintained on a large scale.
          </span>
          <br></br>

          <span className={`text-md block ${inter.className}`}>
            I also have a solid understanding of different programming languages
            like Python, C++, and JavaScript. These skills, combined with my
            problem-solving mindset, have helped me tackle 400+ LeetCode
            problems, providing a different perspective to approach challenges
          </span>
          <br></br>
          <span className={`text-md block ${inter.className}`}>
            I started using Linux in January 2022; it's almost 2 years now, and
            I absolutely love everything about Linux. I began with Vim and moved
            to Neovim, and my dotfiles repository has grown a lot since then.
            Additionally, I love dark color schemes and gradient texts; you can
            see them in all my works.
          </span>
          <br></br>
          <span className={`text-md block ${inter.className}`}>
            "I'm currently looking for job opportunities. This year has been
            full of unexpected changes, but I'm hopeful that it will lead to a
            job offer for me." Here is a link to my
            <Link href={"/Lakshpy.pdf"} download={true}> Resume</Link>
          </span>
        </div>
      </section>

      <section className="relative py-10 md:py-0 w-full px-2.5 p-5" id="projects">
        <Link href="#projects" className='  text-lg pointer-events-auto cursor-pointer sticky '> Projects</Link>


        <div className=" px-3  py-3 flex flex-col md:flex-row justify-between w-full hover:transition-all   hover:bg-slate-400  hover:bg-opacity-10 overable lg:p-4 lg:rounded-lg hover:text-teal-300  my-5">
          <div className=" font-bold text-slate-500 lg:w-2/5">June 2023</div>
          <div className={`flex flex-col lg:px-5 ${inter.className}`}>
            <div className=" font-bold ">
              <h1 className=" text-lg"> Honeyscript Interpreter</h1>
              {/* <h2 className=" text-lg  "> @ Avasoft</h2> */}
            </div>
            <p className=" w-full text-slate-400 lg:py-5">
              Sweet little TypeScript interpreter, HoneyScript, powered by Deno. Highlights include tokenization, AST nodes, and runtime value support, bringing a delightful scripting experience.Supports Basic Features like variable, conditional,loops and Functions.
            </p>
            <ul className="flex list-none flex-wrap w-full">
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> Next.js </li>
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> React.js </li>
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> Typescript </li>
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> MySQL </li>
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> TailwindCSS </li>
            </ul>
          </div>
        </div>

        <div className=" px-3  py-3 flex flex-col md:flex-row justify-between w-full hover:transition-all   hover:bg-slate-400  hover:bg-opacity-10 overable lg:p-4 lg:rounded-lg hover:text-teal-300  my-5">
          <div className=" font-bold text-slate-500 lg:w-2/5">April 2023</div>
          <div className={`flex flex-col lg:px-5 ${inter.className}`}>
            <div className=" font-bold ">
              <h1 className=" text-lg"> Student Performance  </h1>
              {/* <h2 className=" text-lg  "> @ Avasoft</h2> */}
            </div>
            <p className=" w-full text-slate-400 lg:py-5">
              Student performance tracking web app: Teachers securely log in, access student data, post marks, with encrypted passwords (bcrypt), JWT authentication, and dynamic data visualization via Chart.js (Radar and Doughnut charts).
            </p>
            <ul className="flex list-none flex-wrap w-full">
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> Next.js </li>
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> React.js </li>
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> Typescript </li>
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> MySQL </li>
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> TailwindCSS </li>
            </ul>
          </div>
        </div>


        <div className=" px-3  py-3 flex flex-col md:flex-row justify-between w-full hover:transition-all   hover:bg-slate-400  hover:bg-opacity-10 overable lg:p-4 lg:rounded-lg hover:text-teal-300  my-5">
          <div className=" font-bold text-slate-500 lg:w-2/5">April 2023</div>
          <div className={`flex flex-col lg:px-5 ${inter.className}`}>
            <div className=" font-bold ">
              <h1 className=" text-lg"> Find Blood Donor Application</h1>
              {/* <h2 className=" text-lg  "> @ Avasoft</h2> */}
            </div>
            <p className=" w-full text-slate-400 lg:py-5">
              Find Blood Donor app with a stunning UI, crafted using   Vite Appa and  Daisy UI frameworks. Seamlessly search for specific blood groups in designated locations, ensuring a user-friendly experience for quick and efficient donor connections
            </p>
            <ul className="flex list-none flex-wrap w-full">
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> Next.js </li>
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> React.js </li>
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> Typescript </li>
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> MySQL </li>
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> TailwindCSS </li>
            </ul>
          </div>
        </div>

      </section>


      <section className="relative py-10 md:py-0 w-full px-5 p-5" id="experience">
        <Link href="#experience" className='  text-lg pointer-events-auto cursor-pointer sticky  lg:my-5'> Experience</Link>

        <div className=" px-3  py-3 flex flex-col md:flex-row justify-between w-full hover:transition-all   hover:bg-slate-400  hover:bg-opacity-10 overable lg:p-4 lg:rounded-lg hover:text-teal-300  my-5">
          <div className=" font-bold text-slate-500 lg:w-2/5"> Aug - Oct-2022</div>
          <div className={`flex flex-col lg:px-5 ${inter.className}`}>
            <div className=" font-bold ">
              <h1 className=" text-lg"> Cloud Trainee Engineer</h1>
              <h2 className=" text-lg  "> @ Avasoft</h2>
            </div>
            <p className=" w-full text-slate-400 lg:py-5"> During my internship, I explored networking, fundamental Linux operations, and automation using Ansible. I honed my skills in CentOS 7, a prominent Linux distribution, and gained practical insights into cloud computing, particularly in Microsoft Azure.

            </p>
            <ul className="flex list-none flex-wrap w-full">
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> Ansible </li>
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> Azure </li>
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> Docker </li>
              <li className=" p-1 px-2 links rounded-2xl bg-opacity-20  m-1 bg-teal-600"> Linux </li>
            </ul>
          </div>
        </div>


      </section>

    </>
  );
}
