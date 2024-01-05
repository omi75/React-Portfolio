import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import './App.scss'
import About from './Components/About'
import Work from './Components/Work'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  const [theme ,setTheme]=useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  function switchTheme()
  {
     theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  useEffect(()=>{
    localStorage.setItem("theme",theme);
  },[theme]);

  return (
    <div data-theme={theme}>
      <Navbar theme={theme} switchTheme={switchTheme} />
      <Home/>
      <About/>
      <Work/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App