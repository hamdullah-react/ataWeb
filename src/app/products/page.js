import Catvoisepage from '@/components/catvoisepage/Catvoisepage'
import Catvoisepage1 from '@/components/catvoisepage/dumy'
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