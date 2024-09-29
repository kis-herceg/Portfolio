
import React, { useRef } from 'react';
import './CostumeStyle.css';
import Home from './pages/Home.tsx';
import NavMenu from './components/NavMenu/NavMenu.tsx';
import Header from './components/Header/Header.tsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Contact from './pages/Contact.tsx';
import Footer from './components/Footer/Footer.tsx';
import Projects from './pages/Projects.tsx';

const App = () => {



//   <div className="App">
//   <Header scrollToSection={scrollToSection} sectionRefs={sectionRefs} />
//   <Home sectionRefs={sectionRefs} />
// </div>

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
