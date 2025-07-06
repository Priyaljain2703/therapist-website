import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import '../src/app/globals.css'
import FAQSection from '../sections/faq'
import Contact from '../sections/contact'

function Index() {
  return (
    <div className='bg-[#fff] text-[#000]'>
    <Hero/>
    <About/>
    <Services/>
    <FAQSection/>
    <Contact/>
    </div>
    
  )
}

export default Index