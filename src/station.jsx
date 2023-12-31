
import React, { useState } from "react";
import  {global}  from "./context";
import Ticket from "./ticket";
import { useContext } from "react";
import Locationselect from "./locations";


const Selectplace = (CityName) => {
  if(CityName=='hyderabad'){
      return ['Bharath Nagar','Kukatpally','Kphb','ESI'];
  }
  else if(CityName=='mumbai'){
     return ['Bandra','Thane','Boravali','Juhu'];
  }
  else if(CityName=='delhi'){
     return ['Rajiv chowk','Krirti nagar','dwaraka','Botanical garden'];
  }
  else{
    return []
  }
}
const Places=()=>{
  const [fromloc,setFromloc]=useState();
  const [toloc,setToloc]=useState();
  
  const CityName=useContext(global);

  
  const receivedArray=Selectplace(CityName);
  
  const handleFromChange = ( value) => {
    setFromloc(value);
  };
  const handleToChange = ( value) => {
    setToloc(value);
  };
return(
    <>
    
    <h3>From:</h3><Locationselect names={receivedArray}  onSelectionChange={handleFromChange} /><br></br>
    
    <h3>To:</h3> <Locationselect  names={receivedArray} onSelectionChange={handleToChange} /><br />

    <Ticket fromloc={fromloc} toloc={toloc}/>
   
    </>
)

}
export  {Places,Selectplace};