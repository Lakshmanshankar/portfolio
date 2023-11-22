"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google'

const inter = Inter({ weight: "900", subsets: ["latin"] });
const interlight = Inter({ weight: "200", subsets: ["latin"] });
const colorStr = `rgba(36, 138, 255, 0.15)`;

export function SideBar({ children }) {
    const throttledCallback = throttleFun(handleMove, 50);
    const domeElem = useRef(null);

    useEffect(() => {
        domeElem.current = document.getElementById('roseover');
    }, []);

    function handleMove(event) {
        let dom = domeElem.current;
        const { left, top, width, height } = dom.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;
        // const radius = Math.min(width, height) / 2;
        dom.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, ${colorStr} 0, transparent 40%)`;
    }

    function handleMouseLeave() {
        let dom = domeElem.current;
        dom.style.transition = '.3s';
        dom.style.backgroundImage = `none`
    }
    return (
        <div className=' text-white min-h-screen min-w-full bg-slate-900  lg:fixed overflow-scroll  scroll-smooth selection:text-teal-800 selection:bg-teal-200 ' id='roseover' onMouseMove={throttledCallback} onMouseLeave={handleMouseLeave}>
            <div className=" lg:w-1/2 bg-transparent  lg:fixed pointer-events-none"  >
                <div className=' pt-24 px-5 w-full lg:pt-24 lg:pl-24 pb-10'>
                    <h1 className={` pointer-events-auto text-3xl  md:my-2  md:text-5xl font-extrabold ${inter.className}`}> Lakshman shankar</h1>
                    <h2 className={` my-2 text-lg font-bold  md:my-1 lg:text-2xl text-zinc-200  ${interlight.className}`}> Software Application Develeoper </h2>
                    <p className={`  my-2 text-md font-light  md:my-2  lg:text-md text-zinc-200 text-clip  ${interlight.className}`}>  I create Beautiful Web  Applications, Automating Things on the ServerApplications, Automating Things on the Server </p>
                </div>
                <div className={`hidden md:flex w-fit lg:px-24 lg:py-3 font-thin  justify-start flex-col ${interlight}`}>
                    <Link href="#about" className='  text-lg pointer-events-auto cursor-pointer '> About</Link>
                    <Link href="#experience" className='  text-lg pointer-events-auto cursor-pointer '> Experience</Link>
                    <Link href="#projects" className='  text-lg pointer-events-auto cursor-pointer '> Projects</Link>
                </div>
                <div className=' px-5 pb-12 md:flex w-full lg:px-24 lg:py-5 flex justify-start'>
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
                            <a href="https://github.com/Lakshmanshankar">
                                <img src='linkedin.svg' className=' cursor-pointer icons w-8 lg:w-10 lg:mx-2'></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <main className=' lg:w-1/2 lg:absolute right-0 sticky lg:p-14' onMouseMove={throttledCallback} onMouseLeave={handleMouseLeave}>
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
