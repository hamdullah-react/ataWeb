"use client";
import React from "react";
import Table from "react-bootstrap/Table";
import { MdDeleteOutline, MdModeEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useAdminContext } from "../dashboardContext/DashBoardContext";
import AddProducts from "../addProduct/AddProducts";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import Skeleton from 'react-loading-skeleton'


const Datatable = () => {
  const { products, deleteProduct, loading } = useAdminContext();

  console.log('first hey', loading);

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
        <AddProducts />
      </div>
      {loading ? (
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
            {skeletonRows}
          </tbody>
        </Table>
      ) : (
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
      )}
    </>
  );
};

export default Datatable;
