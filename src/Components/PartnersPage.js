import React from 'react'
import http from '../helpers/http';
import { useState, useEffect } from 'react';
import Header from './Header';
import MyButton from './MyButton';
import MyTable from './MyTable'
import AddPartnerModal from './AddPartnerModal';

export default function PartnersPage() {
    const submitPartner = (name, address, postalCode, city, country, phone, description, logo, website, active, modulePerms) => {
      let partnerData = {
        name: name,
        address: address,
        postalCode: postalCode, 
        city: city,
        country: country,
        phone: phone, 
        description: description,
        logo: logo,
        website: website,
        active: active,
        modulePerms: modulePerms
      };
      console.log(JSON.stringify(partnerData));
      http.post('/partners',JSON.stringify(partnerData))
      .then(function (response) {
          console.log(response);
            http.get('/partners')
            .then(response => setData(response.data["hydra:member"]))
            .catch(error => console.log(error));
      })
      .catch(function (error) {
        console.log(error);
      });
      };

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
        <AddPartnerModal submitPartner={(name, address, postalCode, city, country, phone, description, logo, website, active, modulePerms) => submitPartner(name, address, postalCode, city, country, phone, description, logo, website, active, modulePerms)}/>
        <MyTable parentData={data ? data : ''} />
    </div>
  )
};