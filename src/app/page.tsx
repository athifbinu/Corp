import Image from 'next/image'
import Link from 'next/link'
import homeImage from "../../public/Images/home.jpg"

export default function Home() {
  return (
           <div>
             Home
              <Image src={homeImage} alt=''/>
           </div> 
  )
}
