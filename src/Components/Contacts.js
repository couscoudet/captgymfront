import React from 'react'
import http from '../helpers/http';
import { useState } from 'react';

export default function Contacts() {
    const [data, setData] = useState(null);
    http.get('/contacts')
    .then(response => console.log(response.data[0]))
    .catch(error => console.log(error));
  return (
    <div>Hello</div>
  )
};