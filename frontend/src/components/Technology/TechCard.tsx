import React from 'react'

const TechCard = (props: { key: number, platforms: React.ReactNode[], icon: React.ReactNode; name: string} ) => {

  const listPlat = props.platforms.map((plat, index) => 
    <div key={index}>
      {plat}
    </div>
  );

  return (
    <div className='bg-[#121E2D] text-[#ffff] rounded-[14px] w-auto h-auto relative tech-card-shadow cursor-pointer flex flex-col justify-between tech-card-shadow'>
      <div className='p-2 text-end flex justify-end'>
        {listPlat}
      </div>
      <div className='p-2 px-4 place-self-center'>
        {props.icon}
      </div>
      <div className='p-2 text-center'>
        {props.name}
      </div>
    </div>
  )
}

export default TechCard