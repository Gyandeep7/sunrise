import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Locationselect = ({ names, onSelectionChange }) => {
  const [selectedName, setSelectedName] = useState('');
console.log(names)
  const handleSelectChange = (event) => {
    setSelectedName(event.target.value);
    onSelectionChange(event.target.value);
  };

  return (
    <div>   
      <FormControl sx={{minWidth: 220, left: 10, margin: 4 }}>
        <InputLabel id="demo-simple-select-label">place</InputLabel>
        <Select onChange={handleSelectChange}>
          {
          names.map((ele,index)=>{
            return <MenuItem key={index} value={ele}>{ele}</MenuItem>
          })
          }
        </Select>
      </FormControl>

    </div>
  );
};

export default Locationselect