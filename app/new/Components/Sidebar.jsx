"use client";
import React, { useEffect, useRef, useState } from 'react';
import data from "../../data.json"
import { Inter } from 'next/font/google';
const interHeader = Inter({ weight: "500", subsets: ["cyrillic"] })
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
    <div className={`min-h-screen w-full lg:flex justify-center ${data.colors[data.current].background} overflow-scroll scroll-smooth selection:${data.colors[data.current].selectBg} selection:${data.colors[data.current].selectText}`} id='hoverGradient' onMouseMove={throttledCallback} onMouseLeave={handleMouseLeave}>
      <nav className="fixed top-0 w-full ">
        <ul className="flex w-full justify-center backdrop-blur-md " key={"ul"}>
          {data.paths.map((path, id) => (
            <li className='py-3' key={`item-${id}`}><a key={`path-${id+Math.random()*23}`} className={`lg:p-3 p-2 py-5 text-base lg:text-xl text-white  cursor-pointer hover:${data.colors[data.current].hoverColor}`}>{path.name}</a></li>
          ))}
        </ul>
      </nav>
      <main className='lg:w-10/12 xl:w-8/12 2xl:w-7/12 xl:ml-10'>
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
