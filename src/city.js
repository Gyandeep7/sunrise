import React, { useContext, useState } from 'react';
import { global } from './context.js';
import './task.css'
import { Places } from './station.js';
import Ticket from './ticket.js';

const City = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const CityChange = (e) => {
    setSelectedCity(e.target.value);
  }
  return (
    <>
      <div className='container'>
        <label>Select a City:</label>
      
      <select name="city" onChange={CityChange} value={selectedCity}>
        <option value="" disabled>Select a city</option>
        <option value="hyderabad">Hyderabad</option>
        <option value="mumbai">Delhi</option>
        <option value="delhi">Chennai</option>
      </select>
    </div>

    <global.Provider value={selectedCity}>
        <Places />
        <Ticket />
    </global.Provider>

</>
  );
};


export default City;