
import React, { Suspense } from "react";
import Categoriespage from '@/components/categoriepage/Categoriepage'

export async function generateMetadata({ params, searchParams }, parent) {
 
  const parsedData = JSON.parse(searchParams.data);
    // console.log("firstdata", parsedData);

    return {
      // Add openGraph or other metadata properties as needed
        title: parsedData.name, // Ensure consistency between title and openGraph
        description: parsedData.description ,// Provide default or fetch description
        images: [parsedData.img] // Use product image or default
      
    };
}
 

const page = ({searchParams}) => {

  const parsedData = JSON.parse(searchParams.data);

  return (
    <>
      <Suspense>
        <Categoriespage receivedObject={parsedData}/>
      </Suspense>

    </>
  );
};

export default page;
