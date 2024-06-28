import React from 'react'
import TechSection from '../components/Technology/TechSection.tsx'
import Hero from '../components/Hero/Hero.tsx'
import Experience from '../components/Experience/Experience.tsx'
import PortfolioGit from '../components/PortfolioGit/PortfolioGit.tsx'
import TechSkillList from '../components/TechSkillList/TechSkillList.tsx'
import Footer from '../components/Footer/Footer.tsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <PortfolioGit />
      <TechSkillList />
      <Footer />
      {/* <TechSection/>
      <Experience /> */}
      
    </div>
  )
}

export default Home