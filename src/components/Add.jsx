import React from 'react'
import Boton from './Boton'
import { useState } from 'react';

const Add = ({add}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const addItem = () => {
    add({name, price});
    setName("");
    setPrice(0);
  };

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="" name="" />
      <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" id="" name="" />
      <Boton name="Agregar" />
    </div>
  )
}

export default Add
