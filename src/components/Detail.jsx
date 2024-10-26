import React from 'react';
import { useParams } from 'react-router-dom';

export default function Detail () {
  const {id} = useParams()
  console.log('id->', id);
  
  return (
    <div>
      <h2>detail</h2>
    </div>
  );
}