"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function Skills() {
  const [showGradient, setShowGradient] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: { clientX: number; clientY: number; }): void => {
    if (containerRef && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({ x, y });
    }
  };

  return (
    <div
      className="w-full my-3 mx-0"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowGradient(false)}
      onMouseEnter={() => setShowGradient(true)}
    >
      <div className='rounded-xl min-h-[250px] px-7 flex items-center'
        style={showGradient ? {
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(235, 35, 180, 0.19), rgba(30, 10, 10, 0))`,
        } : {}}
      >
        <div className='w-full primary-text '>
          {/* <p className='text-neutral-400 text-lg'>have experience in </p> */}
          <ul className='flex flex-col justify-center text-lg break-words bg-transparent'>
            <li>1. Web Applications </li>
            <li>2. Developer Tooling</li>
            <li className='w-[80%]'> Also interested in Problem solving</li>
          </ul>
        </div>

        <div className='hidden md:block'>
          <div className='w-full flex justify-end'>
            <div className='flex flex-col-reverse'>
              <Tile title='linux' />
            </div>
            <div className='flex flex-col-reverse'>
              <Tile title='git' />
              <Tile title='docker' />
            </div>
            <div className='flex flex-col-reverse'>
              <Tile title='fb' />
              <Tile title='sql' />
            </div>
            <div className='flex flex-col-reverse'>
              <Tile title='gql' />
              <Tile title='react' />
            </div>
            <div className='flex flex-col-reverse'>
              <Tile title='c++' />
              <Tile title='python' />
              <Tile title='ts' />
            </div>
          </div>
          <p className='text-center mt-1 text-sm text-neutral-400 '>Tools of trade</p>
        </div>
      </div>
    </div>
  )
}
export function Tile({ title }: { title: ImageKeys }) {

  return <div className='w-14 h-14 bg-transparent rounded-lg m-1 flex justify-center items-center break-words hover:scale-125 transition-transform '>
    <Image src={ImageMap[title]} alt={title} width={40} height={40} />
  </div>
}

const ImageMap = {
  "python": 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  "ts": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
  "c++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",

  "gql": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  "react": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",

  "fb": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  "sql": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",

  "git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",

  "linux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
}

type ImageKeys = keyof typeof ImageMap;
