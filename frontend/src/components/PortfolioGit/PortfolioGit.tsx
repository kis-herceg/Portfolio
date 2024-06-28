
import React from 'react'
import ConsoleBlock from './ConsoleBlock.tsx'

import { FaGithub } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import TechCard from '../Technology/TechCard.tsx';

const PortfolioGit = () => {

  interface TechItem {
    id: number;
    platforms: React.ReactNode[];
    icon: React.ReactNode;
    name: string;
  }

  const techItems: TechItem[] = [
    { id: 1, platforms: [], icon: <FaReact size={75} color='#53C1DE' />, name: "React" },
    { id: 2, platforms: [], icon: <SiTailwindcss  size={75} color='#38BDF8' />, name: "Tailwind CSS" },
    { id: 3, platforms: [], icon: <FaJava  size={75} color='#3A75B0' />, name: "Java" },
    { id: 4, platforms: [], icon: <FaDocker  size={75} color='#01094E' />, name: "Docker" },
    { id: 5, platforms: [], icon: <DiMysql  size={75}  />, name: "MySql" },
  ];



  return (
    <div className='section max-sm:px-0 dark:bg-zinc-900 flex max-xl:flex-col justify-between gap-5'>
      <div className='w-3/5 max-xl:w-full'>
        <ConsoleBlock />
      </div>
      <div className='w-2/5 flex flex-col h-full gap-2 max-xl:w-full '>
      {/* bg-[#e8e8e8]  */}
        <div className='w-full h-full p-4 border-[1px] border-[#aa30b1] dark:bg-fuchsia-900  bg-[#e8e8e8]  bg-contour-3-svg  bg-cover rounded-3xl shadow-xl' > 
          <div className='backdrop-blur-sm dark:bg-zinc-700/20  rounded-3xl p-2 pb-16 dark:text-slate-50'>
            <div className='flex justify-between content-center mb-2'>
              <h2 className='text-2xl'>Porftólió projekt</h2>
              <FaGithub size={35} />
            </div>
            <div className='mb-2'>
              <p>Több másik projektem mellett ez a protfólió oldal is publikusan elérhető a GitHub profiliomon. Ezekkel tudom a legjobban szemlétetni a különböző megoldásokat és programozási nyelveket amiket használok. </p>

            </div>
            <div className='flex flex-wrap gap-2 mb-2 justify-center'>
              {
                techItems.map((tech, index) => 
                  <TechCard key={index}
                    platforms={tech.platforms}
                    icon={tech.icon}
                    name={tech.name}
                  />
                )
              }
            </div>
            <div className='btn-1 float-start'>GitHub</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PortfolioGit