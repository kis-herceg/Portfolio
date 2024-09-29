import React from 'react'
import { Outlet, Link } from "react-router-dom";

import { FaLinkedin, FaDiscord, FaEnvelopeSquare} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='pb-0 px-[100px] max-sm:px-0 p-2 dark:bg-zinc-900 dark:text-slate-50'>
      <div className='border-t-[1px] border-fuchsia-600/60'>
        <div className='flex justify-between items-center py-10 max-sm:justify-around'>
          <div className='flex gap-5 items-center max-sm:flex-col'>
            <a target="_blank" href=""><FaLinkedin size={25} /></a>
            <a target="" href="mailto: pausdani4@gmail.com"><FaEnvelopeSquare size={25} /></a>
            <a target="_blank" className='flex gap-1 items-center' href=""><FaDiscord size={25} />kis_herceg</a>
          </div>
          <div className='flex gap-5 max-sm:flex-col'>
            <Link to={"/"} >Home</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
        </div>
        <div className='flex justify-center p-2'>
          <h2>© 2024 Pausch Dániel. All Rights Reserved.</h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer