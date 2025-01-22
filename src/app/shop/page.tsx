import React from 'react'
import Image from 'next/image'
import ShopSection from '../components/ShopSection'
import FilterSection from '../components/FilterSection'
import brands from "@/app/imagess/shopImages/desktop-clients-1.png"
import ShopProductSection from '../components/shopPorductsection'
import Navbar from '../components/Navbar'


function shop() {
  return (
    <div>
      <Navbar/>
      <ShopSection/>
      <FilterSection/>
      <Image src={brands} alt='brands' layout='responsive' className='w-screen m-auto'/>
      <ShopProductSection/>
    </div>
  )
}

export default shop
