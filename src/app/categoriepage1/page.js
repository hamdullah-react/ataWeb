
import React, { Suspense } from "react";
import Categoriespage from '@/components/categoriepage/Categoriepage'

const page = () => {

  return (
    <>
      <Suspense>
        <Categoriespage />
      </Suspense>

    </>
  );
};

export default page;
