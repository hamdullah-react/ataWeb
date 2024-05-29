import ProductDetail from "@/components/allproducts/ProductDetail";
import React, { Suspense } from "react";

export async function generateMetadata({ params, searchParams }, parent) {
 
  const parsedData = JSON.parse(searchParams.data);


    return {
      // Add openGraph or other metadata properties as needed
        title: parsedData.name, // Ensure consistency between title and openGraph
        description: parsedData.description ,// Provide default or fetch description
        images: [parsedData.img] // Use product image or default
    
    };
}
 
export default function Page({ params, searchParams }) {
  const parsedData = JSON.parse(searchParams.data);
  return (
    <Suspense>
      <ProductDetail receivedObject={parsedData}/>
    </Suspense>
  );
}





