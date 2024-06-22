import React from 'react'
import TechSection from '../components/Technology/TechSection.tsx'
import Hero from '../components/Hero/Hero.tsx'
import Experience from '../components/Experience/Experience.tsx'
import PortfolioGit from '../components/PortfolioGit/PortfolioGit.tsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <PortfolioGit />
      <TechSection/>
      <Experience />
    </div>
  )
}

export default Home