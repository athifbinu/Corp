import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <Link href='/'>Home</Link>
      <Link href='/Performance'>Performance</Link>
      <Link href="/Reliability">Reliability</Link>
      <Link href="/scalability">Scalability</Link>
    </div>
  )
}

export default Navbar
