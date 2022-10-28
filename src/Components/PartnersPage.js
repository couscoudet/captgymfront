import React from 'react'
import http from '../helpers/http';
import { useState, useEffect } from 'react';
import Header from './Header';
import MyButton from './MyButton';
import MyTable from './MyTable'
import AddPartnerModal from './AddPartnerModal';

export default function PartnersPage() {
    const [data, setData] = useState('');
    useEffect(() => {

      http.get('/partners')
  
        .then(response => setData(response.data["hydra:member"]))
  
        .catch(error => console.log(error));
    }, []);
    // http.get('/partners')
    // .then(response => setData(response.data["hydra:member"]))
    // .catch(error => console.log(error));
  return (
    <div>
        <div>{data ? data[0].name : 'chargement'}</div>
        <Header />
        <AddPartnerModal />
        <MyTable />
    </div>
  )
};