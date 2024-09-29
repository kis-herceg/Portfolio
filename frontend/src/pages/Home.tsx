import React, { useRef } from 'react'
import TechSection from '../components/Technology/TechSection.tsx'
import Hero from '../components/Hero/Hero.tsx'
import Experience from '../components/Experience/Experience.tsx'
import PortfolioGit from '../components/PortfolioGit/PortfolioGit.tsx'
import TechSkillList from '../components/TechSkillList/TechSkillList.tsx'
import Footer from '../components/Footer/Footer.tsx'



const Home = () => {

  return (
    <main>
      <section id="section1">
        <Hero />
      </section>
      <section id="section2">
        <PortfolioGit />
      </section>
      <section  id="section3">
        <TechSkillList />
      </section>
      <section  id="section3">
        <Experience />
      </section>
    </main>
  )
}

export default Home