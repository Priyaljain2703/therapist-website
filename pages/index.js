import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import '../src/app/globals.css'
import FAQSection from '../sections/faq'

function Index() {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <FAQSection/>
    </>
    
  )
}

export default Index