'use cleint'
import React from 'react'
import AllproductModal from './AllproductModal'

const Modalbutton = () => {

  return (
    <div  className="w-[100%] card-footer d-flex justify-content-between bg-light border">
    <span className="btn btn-sm text-dark p-0 w-[100%]">
      <AllproductModal/>
    </span>
  </div>
  )
}

export default Modalbutton