import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import './App.scss'
import About from './Components/About'
import Work from './Components/Work'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
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