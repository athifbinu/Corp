import React from 'react'
import Hero from '../components/hero'
import scaleImage from "../../../public/Images/scale.jpg"

const page = () => {
  return (
    <Hero
    imgData={scaleImage}
    imgAlt="Welding"
    title="We Perform good quality"
  />
  )
}

export default page
