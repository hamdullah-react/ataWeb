import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import AddDataForm from '../addData/AddDataForm';

export default function Datatable() {
  const [allData, setAllData] = React.useState([]);

  React.useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/products");
      setAllData(response.data);
      console.log('first', response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <>
      <div style={{marginTop:'2rem',display:'flex',justifyContent:'end'}}>
      <AddDataForm/>
      
      </div>
    
    <TableContainer sx={{marginTop:'1rem'}} component={Paper}>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allData.map((row) => (
            <React.Fragment key={row.id}>
              {row.items.map((item) => (
                <TableRow
                  key={`${row.id}-${item.id}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={item.img} alt={item.name} style={{ width: '50px', height: 'auto' }} />
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.description}</TableCell>
                  <TableCell align="right">
                    {/* Add your action buttons or links here */}
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}