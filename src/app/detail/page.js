import ProductDetail from '@/components/allproducts/productDetail'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense>

        <ProductDetail/>
    </Suspense>
  )
}

export default page