import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { MdDarkMode  } from "react-icons/md";
import { CiLight } from "react-icons/ci";

import { FaHouseChimney } from "react-icons/fa6";


const Header = () => {


// Light or Dark mode 

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

// Show or Hide 

const [visible, setVisible] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

const controlHeader = () => {
  if (window.scrollY > lastScrollY) {
    // Downscroll code
    setVisible(false);
  } else {
    // Upscroll code
    setVisible(true);
  }
  setLastScrollY(window.scrollY);
};

useEffect(() => {
  window.addEventListener('scroll', controlHeader);
  return () => {
    window.removeEventListener('scroll', controlHeader);
  };
}, [lastScrollY]);


  return (
    <header className={`${visible ? ' translate-y-0' : ' -translate-y-full'} transform transition-transform  duration-300 w-full h-16 flex items-center justify-around fixed z-50`}>
      <div className='cursor-pointer p-2 bg-zinc-700/60  backdrop-blur-md rounded-3xl text-white'>
        <Link to={"/"}><FaHouseChimney size={24} /></Link>
      </div>
      <div className='flex flex-row gap-4 p-2 px-6 bg-zinc-700/60 backdrop-blur-md rounded-3xl text-white '>
        <Link to={"/projects"}><div className='nav-link'>Projects</div></Link>
        <Link to={"/contact"}><div className='nav-link'>Contact</div></Link>
      </div>
      <div className='cursor-pointer rounded-full bg-zinc-700/60 backdrop-blur-md p-2' onClick={handleThemeSwitch} >
        {
          theme === "dark" ? <CiLight color='white' size={24} /> : <MdDarkMode color='white' size={24} />
        }
      </div>
      
    </header>
  )
}

export default Header