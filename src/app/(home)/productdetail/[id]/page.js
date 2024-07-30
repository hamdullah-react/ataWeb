import ProductDetail from '@/components/allproducts/ProductDetail'
import React, { Suspense } from 'react'

const page = ({ params, searchParams }) => {


  return (
    <>
     <Suspense>
    <ProductDetail id={params.id}/>
     </Suspense>
    </>
    )

}

export default page