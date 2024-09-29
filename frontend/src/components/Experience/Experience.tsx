import React from 'react'
import "swiper/swiper-bundle.css";

import { IoClose } from "react-icons/io5";
import { FaMinus, FaExpand  } from "react-icons/fa";
import BlurBox from '../UI/BlurBox.tsx';
import CostumeButton from '../UI/CostumeButton.tsx';


const Experience = () => {
  return (
    <div className='section max-sm:px-0 pt-20 dark:bg-zinc-900 dark:text-slate-50'>
      <h2 className='inline-block mb-8 text-7xl max-lg:text-7xl max-md:text-7xl max-sm:text-4xl max-[300px]:text-xl font-black text-gradient-1 font-kanit p-5'>Tapasztalatok</h2>
      <div className='flex gap-5 max-lg:flex-col'>
        <div className='w-1/2 max-lg:w-full flex flex-col gap-5 max-sm:p-5'>
          <BlurBox css={"bg-neon-3 border-[#0bbaba] dark:bg-fuchsia-900"}>
            <div className='flex justify-between text-slate-50'>
              <h3 className='text-2xl mb-5 text-gradient-2 font-kanit font-black '>Operátor - Logiscool</h3>
              <p className='whitespace-nowrap'>2018 - 2022</p>
            </div>
            <p className='text-slate-50'>Programozás oktatás közép- és általános iskolás diákok számára, Python és JavaScript nyelven. A középiskola alatt kaptam ezt a lehetőséget, így még többet tanulva az informatikáról.</p>
          </BlurBox>
          <BlurBox css={"bg-neon-4 bg-center border-[#0bbaba] dark:bg-fuchsia-900"}>
            <div className='flex justify-between text-slate-50'>
              <h3 className='text-2xl mb-5 text-gradient-2 font-kanit font-black '>Junior Full Stack Developer - Virtuarium kft</h3>
              <p className='whitespace-nowrap'>2022 - 2024</p>
            </div>
            <p className='text-slate-50'>Tervezési folyamatokban való részvétel, összetett szerver és kliensoldali alkalmazások fejlesztése és karbantartása. Dokumentum kezelő alkalmazások fejlesztése és karbantartása. Meglévő weboldalak fejlesztése és karbantartása.</p>
          </BlurBox>
        </div>
        <div className='w-1/2 max-lg:w-full p-5'>
          <p className='pb-5'>Fejlesztés során mindig törekszem arra hogy tiszta, átlátható és minődésgi kódot írjak. Sokmindent tanultam már amióta informatikával foglalkozom, de tudom hogy mindig van hova fejlődni, így keresem az új lehetőségeket és kihívásokat.</p>
          <div className='float-start'>
            <CostumeButton onClick={() => console.log('')}>
              Contact
            </CostumeButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience