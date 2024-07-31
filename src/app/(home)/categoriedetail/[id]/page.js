
import React from 'react'
import Categoriespage from '@/components/categoriepage/Categoriepage'

export async function generateMetadata({ params}) {
  const id = params.id;
  const product = await fetch(`http://localhost:3000/api/categorie/${id}`);
  const resMetadata = await product.json();

  console.log('resMetadata',resMetadata)

  return {
    title: resMetadata?.name,
    description: resMetadata?.description,
    keywords: resMetadata?.keyword,
    alternates: {
      canonical: `https://www.mgssuae.com/api/categorie/${resMetadata.name}`,
    },
    openGraph: {
      title: resMetadata.name,
      description: resMetadata.description,
      images: [resMetadata.img],
    },
  };
}

const page = ({ params, searchParams }) => {

   

  return (
   <Categoriespage id={params.id}/> 
  )
}

export default page