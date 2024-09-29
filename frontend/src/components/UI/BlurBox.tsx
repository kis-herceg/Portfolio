import React, { ReactNode } from 'react'

interface BlurBoxProps {
  children: ReactNode;
  css: string;
}

const BlurBox: React.FC<BlurBoxProps> = ({ children, css }) => {
  return (
    <div className={`${css} 'w-full h-full p-4 border-[1px] bg-[#e8e8e8] bg-cover rounded-3xl shadow-xl'`}> 
      <div className='backdrop-blur-sm dark:bg-zinc-700/20  rounded-3xl p-2 dark:text-slate-50'>
        {
          children
        }
      </div>
    </div>
  )
}

export default BlurBox