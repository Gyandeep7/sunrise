import React from 'react'
import { Selectplace } from './station';
import { global } from './context';
import { useContext } from 'react';
const Ticket = (props) => {
  const {fromloc,toloc}=props;  

  const CityName=useContext(global); 
  
  const receivedArray=Selectplace(CityName);

  let const1;
  let const2;
  for (let i=0;i<receivedArray.length;i++){
    if(fromloc==receivedArray[i]){
      const1=i;
    }
    else if(toloc==receivedArray[i]){
      const2=i
    }
  }
  let ticket=const2-const1;
  let price;
  if(ticket>0){
    price=ticket*25;
  }
  else{
    price=Math.abs(ticket)*25;
  }
  return (
    <>
      {
        (price>0)?<p>{price}</p>:<p></p>
      }
    </>
  )
}

export default Ticket
