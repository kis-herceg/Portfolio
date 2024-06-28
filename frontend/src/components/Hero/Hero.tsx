import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProfilInfo from './ProfilInfo.tsx'
import DesignInfo from './DesignInfo.tsx'
import Experience from '../Experience/Experience.tsx';

const Hero = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='section max-sm:px-0 pt-20 dark:bg-zinc-900'>
      <motion.div
        initial={{ opacity: 0, scale: .7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <h1 className='mb-8 inline-block font-kanit lg:text-9xl md:text-7xl sm:text-5xl text-5xl font-black text-gradient-1'>Pausch Dániel</h1>
      </motion.div>
      <motion.div className='h-full'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className='bg-cover bg-center min-h-[600px] rounded-3xl h-full bg-neon-1'>
          <div className='flex max-xl:flex-col justify-between min-h-[600px]'>
            <div className='max-md:w-full xl:w-2/5 max-lg:w-4/5 w-3/5 flex flex-col h-full'>
              <div className='flex-grow'>
                <ProfilInfo />
              </div>
            </div>
            <motion.div className='max-xl:w-full max-xl:flex max-xl:justify-end w-2/5 h-full'
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className='flex flex-col justify-between max-xl:w-4/5 h-full max-md:w-full'>
                <div className='p-4'>
                  <div className='p-2 rounded-3xl backdrop-blur-md bg-white/30'>
                    <h2 className='text-2xl'>Webdizáj és Tervezés</h2>
                    <p>Képes vagyok alapvető tervek elkészítésére Figmában vagy egyéb Adobe programokban, gondosan ügyelve a reszponzív dizájnra és a különféle UI / UX megoldásokra. Nem vagyok grafikus, viszont a hobbi projektjeimnél nagy hasznát veszem ennek a tudásnak.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero