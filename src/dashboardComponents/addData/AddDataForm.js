'use client'
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import axios from "axios";
import { MenuItem, TextField } from "@mui/material";
import { UploadDropzone } from "@/app/(home)/utils/uploadthing";
import Button from 'react-bootstrap/Button';


export default function AddDataForm() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/products");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await axios.post("/api/products", {
        categoryId: selectedCategory,
        name,
        description,
        img,
      });
    
      setName("");
      setDescription("");
      setImg("");
      alert("Data added successfully!");
      
    } catch (error) {
      console.error("Error adding data:", error);
      alert("Error adding data. Please try again.");
    }
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 500, paddingY:'5rem'}} role="presentation" >

        <div  className="flex justify-center">

      <form onSubmit={handleSubmit}  style={{width:"60%", }}>
     
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCategory}
          label="Category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          fullWidth
          required
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
        <TextField
        style={{marginTop:'2rem'}}
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
        />
        <TextField
        style={{marginTop:'2rem'}}
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          required
        />
        {/* <TextField
        style={{marginTop:'2rem'}}
          label="Image URL"
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          fullWidth
          required
        /> */}
{/* image uplader  */}

<UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          setImg(res[0].url)
          // console.log("Files: ", res[0].url);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
{/* image uplader  */}

        <Button 
        style={{marginTop:'2rem'}}
        type="submit" variant="contained" className="text-black">
          Add Data
        </Button>
      </form>
        </div>
    </Box>
  );

  return (
    <div >
      <Button variant="primary" onClick={toggleDrawer(true)} >Add Products</Button>
      
      <Drawer  open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}






