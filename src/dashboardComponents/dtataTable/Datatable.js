"use client";
import React from "react";
import Table from "react-bootstrap/Table";
import { MdDeleteOutline, MdModeEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useAdminContext } from "../dashboardContext/DashBoardContext";
import AddProducts from "../addProduct/AddProducts";
import UpdateProduct from "../UpdateProduct/UpdateProduct";

const Datatable = () => {
  const { products, deleteProduct } = useAdminContext();

  console.log('first hey',products)

  return (
    <>
      <div className="flex justify-end">
        <AddProducts />
      </div>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Image</th>
            <th>Categorie</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {products.map((product) => (
            product.items.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td>{product.name}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <div className="flex gap-2">
                    <FaEye size={20} />
                    <UpdateProduct product={item} />
                    <MdDeleteOutline
                      size={20}
                      color="red"
                      onClick={() => deleteProduct(item.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Datatable;
