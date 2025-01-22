import React from 'react'
import WhatWeDoSection from '../components/WhatWeDo.section'
import Navbar2 from '../components/Navbar2'
import CardSection from '../components/ProductTeamSection'
import FreeTrialSection from '../components/ProductFReeTrailSection'

function Product() {
  return (
    <div>
        <Navbar2/>
      <WhatWeDoSection/>
      <CardSection/>
      <FreeTrialSection/>
    </div>
  )
}

export default Product
