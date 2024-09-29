import React from 'react';
import CostumeButton from '../UI/CostumeButton.tsx';
import { useNavigate } from "react-router-dom";

const ProfilInfo = () => {

  const navigate = useNavigate();
  return (
    <div className='dark:bg-zinc-900 bg-white rounded-tl-3xl rounded-br-3xl relative invert-radius-rt dark:text-slate-50'>
      <div className='absolute w-full h-full invert-radius-lb'>

      </div>
      <div className='flex flex-row max-sm:flex-col'>
        <div className='realative z-10 p-2 aspect-w-1 aspect-h-1 w-1/2 max-sm:w-full'>
          <img className=' object-cover w-full h-full rounded-3xl' src={window.location.origin + '/assets/images/profile.jpg'} alt="" />
        </div>
        <div className='p-2 flex flex-col w-1/2 justify-between max-sm:w-full'>
          <p className='h-auto '>Dániel vagyok, egy lelkes szoftverfejlesztő, legszívesebben backend oldalon dolgozok viszont frontend oldalon is elboldogulok. Szeretek új technológiákat és megoldásokat tanulni, az utóbbi időben nagy érdekeltséggel tekintek a különféle DevOps feladatokra.</p>
          <div className='flex gap-2 justify-end'>
            <CostumeButton onClick={() => console.log('')}>
              <span>CV</span>
            </CostumeButton>
            <CostumeButton onClick={() => navigate("/contact")}>
              <span>Contact</span>
            </CostumeButton>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ProfilInfo