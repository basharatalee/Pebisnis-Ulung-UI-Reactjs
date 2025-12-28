import React from 'react'
import Header from './components/Header'
import Hero from './pages/Hero'
import Partners from './components/Partners'
import Services from './pages/Services'
import WhyChoose from './pages/Whychoose'
import Portfolio from './pages/Portfolio'

import Maps from './pages/Map'
import Footer from './pages/Footer'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Partners />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Maps />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default App
