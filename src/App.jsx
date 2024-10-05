import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import CardsSection from './components/CardSection/CardSection'

function App() {

  return (
    <>
      {/* navbar component */}
      <NavBar/>
      {/* hero component */}
      <Hero/>
      {/* card component */}
      <CardsSection/>
    </>
  )
}

export default App
