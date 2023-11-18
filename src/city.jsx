import React, { useContext, useState } from 'react';
import { global } from './context.js';
import { Places } from './station.jsx';
import Ticket from './ticket.jsx';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const City = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const CityChange = (e) => {
    setSelectedCity(e.target.value);
  }
  return (
    <>
      <FormControl sx={{minWidth: 220, left: 900, margin: 4 }}>
        <InputLabel>City</InputLabel>
        <Select
          value={selectedCity}
          label="City"
          onChange={CityChange}
        >
          <MenuItem value="hyderabad">Hyderabad</MenuItem>
          <MenuItem value="mumbai">Mumbai</MenuItem>
          <MenuItem value="delhi">Delhi</MenuItem>
        </Select>
      </FormControl>

    <global.Provider value={selectedCity}>
        <Places />
        <Ticket />
    </global.Provider>

</>
  );
};


export default City;