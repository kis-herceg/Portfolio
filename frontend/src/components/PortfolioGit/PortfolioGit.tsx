
import React from 'react'
import ConsoleBlock from './ConsoleBlock.tsx'

const PortfolioGit = () => {
  return (
    <div className='section flex justify-between gap-5'>
      <div className='w-3/5'>
        <ConsoleBlock />
      </div>
      <div className='w-2/5 flex flex-col h-full gap-2 '>
        <div className='w-full h-full bg-[#E8E8E8] p-4 rounded-3xl shadow-xl'>
          <p>Ez a zseniális projekt fent van my profi github amin amúgy semmi értelmes nincs publikálva az isis szarjaimon kívűl aminek am semmi köze a programozáshoz.</p>
        </div>
        <div>
          <div className='btn-1 float-end'>Tovább</div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioGit