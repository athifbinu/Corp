import React from 'react'
import Hero from '../components/hero'
import relibleImage from "../../../public/Images/reliability.jpg"

const page = () => {
  return (
    <Hero
    imgData={relibleImage}
    imgAlt="Welding"
    title="We Perform good quality"
  />
  )
}

export default page
