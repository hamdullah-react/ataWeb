import React from 'react'
import banner from '../../../public/img/banner.png'
import Image from 'next/image'

const Banner = () => {
  return (
   <>

   <div >
    <Image src={banner} alt='banner'/>
   </div>

   </>
  )
}

export default Banner