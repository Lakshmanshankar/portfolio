
"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ weight: "900", subsets: ["latin"] });
const interlight = Inter({ weight: "200", subsets: ["latin"] });
// const colorStr = `rgba(36, 138, 255, 0.15)`;
import data from "../../data.json"

export function Sidebar({ children }) {
    const throttledCallback = throttleFun(handleMove, 10);
    const domeElem = useRef(null);

    useEffect(() => {
        domeElem.current = document.getElementById('hoverGradient');
    }, []);

    function handleMove(event) {
        let dom = domeElem.current;
        const { left, top, width, height } = dom.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;
        dom.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, ${data.colors[data.current].circleGradient} 0, transparent 40%)`;
    }

    function handleMouseLeave() {
        let dom = domeElem.current;
        dom.style.transition = '.3s';
        dom.style.backgroundImage = `none`
    }
    return (
        <div className={`min-h-screen w-full lg:justify-center ${data.colors[data.current].background} lg:flex overflow-scroll scroll-smooth selection:${data.colors[data.current].selectBg} selection:${data.colors[data.current].selectText}`} id='hoverGradient' onMouseMove={throttledCallback} onMouseLeave={handleMouseLeave}>
            <nav className="fixed top-0 w-full ">
                <ul className="flex w-full justify-center backdrop-blur-md ">
                    {data.paths.map((path, id) => (
                        <li key={`path-${id}`} className={`lg:p-3 p-2  text-base lg:text-xl text-red-50 `}>{path.name}</li>
                    ))}
                </ul>
            </nav>
            
            <main className='lg:w-10/12 xl:w-8/12'>
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
