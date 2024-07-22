'use client'
import * as React from "react";
import axios from "axios";
import AddDataForm from "../addData/AddDataForm";
import { MdDeleteOutline, MdModeEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import AddCategorie from "../addCategorie/AddCategorie";

const Categories = () => {
    const [allData, setAllData] = React.useState([]);

    React.useEffect(() => {
      fetchCategories();
    }, []);
  
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categorie");
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
   <AddCategorie/>
      </div>

      <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          
          <th >Name</th>
          <th >Description</th>
          <th >Actions</th>
        </tr>
      </thead>
      <tbody>

   {allData.map((row) => (
    <React.Fragment key={row.id}>
         <tr
          key={row.id}
          className="last:border-b-0"
        >

          <td >
            {row.name}
          </td>
          <td >{row.description}</td>
          <td  >
            
            <div className="flex gap-2">
              <FaEye size={20} />
              <MdModeEdit size={20} />
              <MdDeleteOutline size={20} color={"red"} />
            </div>
            
          </td>
        </tr>
    </React.Fragment>
  ))}
       
      </tbody>
    </Table>
    
    </>
  )
}

export default Categories