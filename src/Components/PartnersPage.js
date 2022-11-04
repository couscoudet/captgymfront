import React from 'react'
import http from '../helpers/http';
import { useState, useEffect } from 'react';
import Header from './Header';
import MyTable from './MyTable'
import AddPartnerModal from './AddPartnerModal';
import ModifyPartnerModal from './ModifyPartnerModal';
import { useRef } from 'react';
import { Form } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

export default function PartnersPage() {

    const loadData = () => {
      setLoaded(false)
      http.get(`/partners?active=${activePartners}`)
        .then(response => setData(response.data["hydra:member"]))
        .then(()=>setLoaded(true))
        .catch(error => console.log(error));
      }
    
    const [loaded, setLoaded] = useState(false)

    const submitPartner = (name, address, postalCode, city, country, phone, description, logo, website, active, defaultPerms, method, id) => {
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
        defaultPerms: defaultPerms
      };
        if (method === 'post') {
          setLoaded(false)
          http.post('/partners',JSON.stringify(partnerData))
          .then(function (response) {
                loadData();
        })
        }
        if (method === 'put') {
          setLoaded(false)
          http.put(`/partners/${id}`,JSON.stringify(partnerData))
          .then(function (response) {
                loadData();
          })
        }

      }

    //Modify Modal Childref Handleshow
    const childRef = useRef(null);

    const [activePartners, setActivePartners] = useState(true);

    const [data, setData] = useState('');
    const [partnerToModify, setPartnerToModify] = useState({});

    const setPartnerId = id => {
        let partner = data.filter(partner => partner.id == id)
        setPartnerToModify(partner[0]);
        setTimeout(() => childRef.current.handleShow(),500);
    }

 
    useEffect(() => 
      loadData(), 
      [activePartners]);

  return (
    <div>
        <div>{data ? '' : 'chargement...'}</div>
        <Header />
        <AddPartnerModal submitPartner={(name, address, postalCode, city, country, phone, description, logo, website, active, defaultPerms, method, id) => submitPartner(name, address, postalCode, city, country, phone, description, logo, website, active, defaultPerms, method, id)}/>
        {partnerToModify && <ModifyPartnerModal 
        submitPartner={(name, address, postalCode, city, country, phone, description, logo, website, active, defaultPerms, method, id) => submitPartner(name, address, postalCode, city, country, phone, description, logo, website, active, defaultPerms, method, id)}
        partner={partnerToModify} ref={childRef}/> }
        <Form>
          <Form.Check
              type="switch"
              id="search-active"
              label="partenaire actifs"
              className="d-flex justify-content-end m-1"
              defaultChecked={true}
              onChange={(event) => setActivePartners(event.currentTarget.checked)}
              />
        </Form>
        {loaded ? <MyTable parentData={data ? data : ''} setPartnerId={setPartnerId}/> : <Spinner animation="grow" variant="primary" />}
    </div>
  )
};