import React from 'react'
import AboutBanner from '../components/AboutBanner'
import AboutBrandSection from '../components/AboutBrandSection'
import AboutTeamSection from '../components/AboutTeamSection'
import AboutCompaniesSection from '../components/AboutCompaniesSection'
import Navbar2 from '../components/Navbar2'

function About() {
  return (
    <div className='bg-white'>
      <Navbar2/>
      <AboutBanner/>
      <AboutBrandSection/>
      <AboutTeamSection/>
      <AboutCompaniesSection/>
    </div>
  )
}

export default About
