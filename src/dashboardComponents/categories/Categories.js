"use client";
import React from "react";
import Table from "react-bootstrap/Table";
import { MdDeleteOutline, MdModeEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useAdminContext } from "../dashboardContext/DashBoardContext";
import AddCategorie from "../addCategorie/AddCategorie";
import UpdateCategory from "../UpdateCategory/UpdateCategory";
import { ToastContainer, toast } from "react-toastify";


const Categories = () => {
  const { categories, deleteCategory,loading } = useAdminContext();

  return (
    <>
      <div className="flex justify-end">
        <AddCategorie />
      </div>

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
    </>
  );
};

export default Categories;
