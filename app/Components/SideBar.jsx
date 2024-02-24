"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google'

const inter = Inter({ weight: "900", subsets: ["latin"] });
const interlight = Inter({ weight: "200", subsets: ["latin"] });
// const colorStr = `rgba(36, 138, 255, 0.15)`;
const colorStr = '#1e293b'

export function Sidebar({ children }) {
  const throttledCallback = handleMove;
  const domeElem = useRef(null);

  useEffect(() => {
    domeElem.current = document.getElementById('roseover');
  }, []);

  function handleMove(event) {
    let dom = domeElem.current;
    const { left, top, width, height } = dom.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;
    dom.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, ${colorStr} 0, transparent 40%)`;
  }

  function handleMouseLeave() {
    let dom = domeElem.current;
    dom.style.transition = '.3s';
    dom.style.backgroundImage = `none`
  }
  return (
    <div className='text-white min-h-screen w-full lg:justify-center bg-slate-950 lg:flex overflow-scroll scroll-smooth selection:text-teal-100 selection:bg-teal-400' id='roseover' onMouseMove={throttledCallback} onMouseLeave={handleMouseLeave}>
      <div className=" lg:w-1/3 lg:hidden bg-transparent pointer-events-none overflow-y-auto lg:fixed lg:left-8"  >
        <div className='flex flex-col justify-center w-full lg:pt-24 lg:pl-24 md:pb-10 mt-10 overflow-hidden'>
          <h1 className={` pointer-events-auto text-3xl  md:my-2  md:text-5xl mt-10 text-center lg:text-start font-extrabold ${inter.className} gradient-text`}> LAKSHMANSHANKAR</h1>
          <h2 className={` my-2 text-lg font-bold  md:my-1 lg:text-2xl text-zinc-200 text-center lg:text-start  pointer-events-auto ${interlight.className}`}> Software Application Develeoper </h2>
          <p className={` w-full px-4 my-2 text-md md:text-lg font-light  md:my-2  lg:text-md text-zinc-200 text-center lg:text-start   ${interlight.className}`}>
            Passionate web app developer with expertise in Linux and cloud technologies, crafting seamless digital experiences.
          </p>
        </div>
        <div className={`md:flex w-fit lg:px-24 lg:py-3 font-thin justify-start flex-col ${interlight} mobile-nav`}>
          <div>
            <Link href="#about" className='  text-lg pointer-events-auto cursor-pointer '> About</Link>
            <Link href="#experience" className='  text-lg pointer-events-auto cursor-pointer '> Experience</Link>
            <Link href="#projects" className='  text-lg pointer-events-auto cursor-pointer '> Projects</Link>
          </div>
        </div>
        <div className=' px-5 md:pb-12 flex justify-center md:flex w-full lg:px-24 lg:py-5  lg:justify-start pointer-events-auto'>
          <ul className=' flex flex-row w-fit md:py-0' >
            <li>
              <a href="https://github.com/Lakshmanshankar" className='w-fit '>
                <img src='github.svg' className='cursor-pointer icons w-8 lg:w-10 lg:mx-2'></img>
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/lakshmanashankrc">
                <img src='leetcode.svg' className=' cursor-pointer icons w-8 lg:w-10 lg:mx-2'></img>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/Lakshmanshankar/">
                <img src='linkedin.svg' className=' cursor-pointer icons w-8 lg:w-10 lg:mx-2'></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <main className='lg:w-1/2 right-0 sticky lg:pt-14 lg:pr-24 pl-10 ' onMouseMove={throttledCallback} onMouseLeave={handleMouseLeave}>
        {children}
      </main>
    </div>
  )
}

const throttleFun = (callbackFn, delay = 100) => {
  let lastinvoked = false;
  let lastCalledArgs = null;

  return (...args) => {
    if (lastinvoked) {
      lastCalledArgs = args;
      return
    }
    callbackFn(...args);
    lastinvoked = true;
    setTimeout(() => {
      if (lastCalledArgs === null) {
        callbackFn(...args);
        lastinvoked = false;
      } else {
        callbackFn(...lastCalledArgs);
        lastCalledArgs = null;
        lastinvoked = false;
      }
    }, delay);
  }
}
