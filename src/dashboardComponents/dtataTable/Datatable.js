'use client'
import * as React from "react";
import axios from "axios";
import AddDataForm from "../addData/AddDataForm";
import { MdDeleteOutline, MdModeEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import AddProducts from "../addProduct/AddProducts";

export default function Datatable() {
  const [allData, setAllData] = React.useState([]);

  React.useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/products");
      setAllData(response.data);
      console.log("first", response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <>
      <div className="flex justify-end">
        {/* <AddDataForm /> */}
        <AddProducts/>
      </div>

      <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th  >Image</th>
          <th >Name</th>
          <th >Description</th>
          <th >Actions</th>
        </tr>
      </thead>
      <tbody>

   {allData.map((row) => (
    <React.Fragment key={row.id}>
      {row.items.map((item) => (
        <tr
          key={`${row.id}-${item.id}`}
          className="last:border-b-0"
        >
          <td component="th" scope="row">
            <img
              src={item.img}
              alt={item.name}
              className="w-12 h-12 object-cover rounded"
            />
          </td>
          <td >
            {item.name}
          </td>
          <td >{item.description}</td>
          <td  >
            
            <div className="flex gap-2">
              <FaEye size={20} />
              <MdModeEdit size={20} />
              <MdDeleteOutline size={20} color={"red"} />
            </div>
            
          </td>
        </tr>
      ))}
    </React.Fragment>
  ))}
       
      </tbody>
    </Table>


{/* 
      <TableContainer className="mt-4" component={Paper}>
        <Table className="min-w-full" aria-label="simple table">
          <TableHead>
            <TableRow>
              <td>Image</td>
              <td align="right">Name</td>
              <td align="right">Description</td>
              <td align="right">Actions</td>
            </TableRow>
          </TableHead>
          <TableBody>
            {allData.map((row) => (
              <React.Fragment key={row.id}>
                {row.items.map((item) => (
                  <TableRow
                    key={`${row.id}-${item.id}`}
                    className="last:border-b-0"
                  >
                    <td component="th" scope="row">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>
                    <td align="right">
                      {item.name}
                    </td>
                    <td align="right">{item.description}</td>
                    <td align="right" >
                      
                      <div className="flex justify-end gap-2">
                        <FaEye size={20} />
                        <MdModeEdit size={20} />
                        <MdDeleteOutline size={20} color={"red"} />
                      </div>
                      
                    </td>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </>
  );
}
