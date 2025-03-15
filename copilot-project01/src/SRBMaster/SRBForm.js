import React, { useState } from 'react';
import { Container, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SRBMasters from '../Data/SRBMasters.json';
import './SRBForm.css';

const SRBForm = () => {
  const [formData, setFormData] = useState({
    OrgName: '',
    IndividualName: '',
    CNIC: '',
    NTN: '',
    Address: '',
    ServiceCode: '',
    ServiceCategory: '',
    CellNo: '',
    Email: ''
  });

  const [data, setData] = useState(SRBMasters);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
    setFormData({
      OrgName: '',
      IndividualName: '',
      CNIC: '',
      NTN: '',
      Address: '',
      ServiceCode: '',
      ServiceCategory: '',
      CellNo: '',
      Email: ''
    });
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  return (
    <Container>
      <h2>SRB Form</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Org Name</TableCell>
              <TableCell>Individual Name</TableCell>
              <TableCell>CNIC</TableCell>
              <TableCell>NTN</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Service Code</TableCell>
              <TableCell>Service Category</TableCell>
              <TableCell>Cell No</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.OrgName}</TableCell>
                <TableCell>{row.IndividualName}</TableCell>
                <TableCell>{row.CNIC}</TableCell>
                <TableCell>{row.NTN}</TableCell>
                <TableCell>{row.Address}</TableCell>
                <TableCell>{row.ServiceCode}</TableCell>
                <TableCell>{row.ServiceCategory}</TableCell>
                <TableCell>{row.CellNo}</TableCell>
                <TableCell>{row.Email}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(index)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <form onSubmit={handleSubmit}>
        <TextField label="Org Name" name="OrgName" value={formData.OrgName} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Individual Name" name="IndividualName" value={formData.IndividualName} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="CNIC" name="CNIC" value={formData.CNIC} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="NTN" name="NTN" value={formData.NTN} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Address" name="Address" value={formData.Address} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Service Code" name="ServiceCode" value={formData.ServiceCode} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Service Category" name="ServiceCategory" value={formData.ServiceCategory} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Cell No" name="CellNo" value={formData.CellNo} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Email" name="Email" value={formData.Email} onChange={handleChange} fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </Container>
  );
};

export default SRBForm;
