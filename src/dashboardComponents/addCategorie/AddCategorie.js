import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { MenuItem, TextField } from "@mui/material";


export default function AddCategorie() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/categorie");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await axios.post("/api/categorie", {
        name,
      });
    
      setName("");
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

        <TextField
        style={{marginTop:'2rem'}}
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
        />

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
      <Button   onClick={toggleDrawer(true)} >Open drawer</Button>
      <Drawer  open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
