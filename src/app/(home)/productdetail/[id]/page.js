import ProductDetail from '@/components/allproducts/ProductDetail'
import React, { Suspense } from 'react'


export async function generateMetadata({ params}) {
  const id = params.id;
  const product = await fetch(`http://localhost:3000/api/products/${id}`);
  const resMetadata = await product.json();

  return {
    title: resMetadata?.name,
    description: resMetadata?.description,
    keywords: resMetadata?.keyword,
    alternates: {
      canonical: `https://www.mgssuae.com/api/products/${resMetadata.name}`,
    },
    openGraph: {
      title: resMetadata.name,
      description: resMetadata.description,
      images: [resMetadata.img],
    },
  };
}

const page = ({ params}) => {


  return (
    <>
     <Suspense>
        <ProductDetail id={params.id}/>
     </Suspense>
    </>
    )

}

export default page