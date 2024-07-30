
import React from 'react'
import Categoriespage from '@/components/categoriepage/Categoriepage'

const page = ({ params, searchParams }) => {

   

  return (
   <Categoriespage id={params.id}/> 
  )
}

export default page