"use client";
import React from "react";
import Table from "react-bootstrap/Table";
import { MdDeleteOutline, MdModeEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useAdminContext } from "../dashboardContext/DashBoardContext";
import AddCategorie from "../addCategorie/AddCategorie";
import UpdateCategory from "../UpdateCategory/UpdateCategory";
import { ToastContainer, toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";


const Categories = () => {
  const { categories, deleteCategory,loading } = useAdminContext();

  const skeletonRows = Array.from({ length: 5 }).map((_, index) => {
    return(

    <tr key={index}>
    <td><Skeleton height={48} width={48} /></td>
    <td><Skeleton width={100} /></td>
    <td><Skeleton width={100} /></td>
    <td><Skeleton width={200} /></td>
    <td>
      <div className="flex gap-2">
        <Skeleton circle height={20} width={20} />
        <Skeleton circle height={20} width={20} />
        <Skeleton circle height={20} width={20} />
      </div>
    </td>
  </tr>
    )
  }

  );


  return (
    <>
      <div className="flex justify-end">
        <AddCategorie />
      </div>


      {
        loading ? (
          <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {skeletonRows}
          </tbody>
        </Table>
        ):(
          
      <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <td>{category.name}</td>
            <td>{category.description}</td>
            <td>
              <div className="flex gap-2">
                <FaEye size={20} />
                <UpdateCategory category={category} />
                
                <MdDeleteOutline
                  size={20}
                  color="red"
                  onClick={() => deleteCategory(category.id)}
                  style={{ cursor: "pointer" }}
                />
                
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
        )

      }

    </>
  );
};

export default Categories;
