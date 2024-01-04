import Link from 'next/link';
import React from 'react';
import Hero from '../components/hero';
import PerformanceImage from "../../../public/Images/performance.jpg"
const page = () => {
  return (
    <Hero
    imgData={PerformanceImage}
    imgAlt="Welding"
    title="We Perform good quality"
  />
  );
}

export default page;
