import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Timeline from './Components/Timeline/Timeline'
import '@fortawesome/fontawesome-free/css/all.css';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Timeline/>
      <About/>
      <Services/>
      
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
