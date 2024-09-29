import React from 'react'

import { FaPhoneSquareAlt, FaEnvelopeSquare, FaLinkedin   } from "react-icons/fa";
import BlurBox from '../UI/BlurBox.tsx';
import ContactForm from '../UI/ContactForm.tsx';
import CostumeButton from '../UI/CostumeButton.tsx';

const ContactComponent = () => {

  const contactData = [
    {
      id: 0,
      icon: <FaPhoneSquareAlt size={35} />,
      title: "Phone",
      text: "+36 0000000"
    },
    {
      id: 1,
      icon: <FaEnvelopeSquare  size={35} />,
      title: "Email",
      text: "pausdani4@gmail.com"
    },
    {
      id: 2,
      icon: <FaLinkedin  size={35} />,
      title: "Linkedin",
      text: "Pausch Dániel"
    }
  ]
  // bg-neon-2 bg-cover bg-no-repeat
  return (
    <div className='section max-sm:px-0  dark:bg-zinc-900 text-slate-50 pt-20 '>
      <div className='mb-8 font-kanit max-sm:p-5'>
        <h1 className='inline-block  lg:text-7xl md:text-7xl sm:text-5xl text-5xl font-black text-gradient-1'>Elérhetőségek</h1>
        <h2 className='text-3xl dark:text-slate-50 text-black'>Szívesen fogadok bármilyen projekt vagy állás megkeresést.</h2>
      </div>
      <div className='flex justify-center max-sm:p-5 pb-10'>
        <BlurBox css='w-full max-w-[1280px] bg-neon-2 border-[#0bbaba]'>
          <div className='flex justify-around max-lg:flex-col'>
            <div className='flex justify-center w-1/3 max-xl:w-1/2 max-lg:w-full'>
              <div className='flex flex-col justify-center gap-5 max-lg:flex-row max-md:flex-col'>
              {
                contactData.map((data) => (
                  <div key={data.id} className='flex justify-start items-center gap-5 max-lg:flex-col max-md:flex-row'>
                    {data.icon}
                    <div className='flex flex-col text-xl max-lg:items-center max-md:items-start'>
                      <h2 className=''>{data.title}</h2>
                      <h2>{data.text}</h2>
                    </div>
                  </div>
                ))
              }
              </div>
            </div>
            <div className='w-2/3 max-xl:w-1/2 max-lg:w-full'>
              <ContactForm path='http://localhost:8080/api/contact/send' />
            </div>
          </div>
        </BlurBox>
      </div>
      {/* <div>
        <h2 className='inline-block  lg:text-7xl md:text-7xl sm:text-5xl text-5xl font-black text-gradient-1 pb-5'>Önéletrajz</h2>
      </div> */}
    </div>
  )
}

export default ContactComponent