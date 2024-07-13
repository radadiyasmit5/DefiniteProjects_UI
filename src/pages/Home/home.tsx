import React from 'react'
import './home.css'
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import OurSector from '../../components/OurSector/OurSector'



const home = () => {
  return (
    <div>
      <HeroSlider />
      <OurSector />
    </div>
  )
}

export default home
