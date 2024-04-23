import Catvoisepage from '@/components/catvoisepage/Catvoisepage'
import { CategoryProvider } from '@/components/context/CategoryContext'
import React from 'react'

const page = () => {
  return (
   <>
   <CategoryProvider>

    <Catvoisepage/>
   </CategoryProvider>
   </>
  )
}

export default page