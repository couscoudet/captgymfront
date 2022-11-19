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
import { Navigate } from 'react-router-dom';

export default function PartnersPage() {

    const loadData = () => {
      setLoaded(false)
      http.get(`${page}&active=${activePartners}${search && '&name='+search}`)
        .then(response => {
          setData(response.data["hydra:member"]);
          setPreviousPageLink(response.data["hydra:view"]["hydra:previous"]);
          console.log(response);
          setNextPageLink(response.data["hydra:view"]["hydra:next"])
          console.log(nextPageLink);
        })
        .then(()=>setLoaded(true))
        .catch(error => { console.log(error); setError(true) });
      }
    
    const [error, setError] = useState(false)
    const [loaded, setLoaded] = useState(false)
      
    console.log(error);
    const submitPartner = (name, address, postalCode, city, country, phone, description, logo, websiteUrl, active, defaultPerms, method, id) => {
      let partnerData = {
        name: name,
        address: address,
        postalCode: postalCode, 
        city: city,
        country: country,
        phone: phone, 
        description: description,
        logo: logo,
        websiteUrl: websiteUrl,
        active: active,
        defaultPerms: defaultPerms
      };
        if (method === 'post') {
          setLoaded(false)
          console.log(partnerData)
          http.post('/partners',JSON.stringify(partnerData))
          .then(function (response) {
                loadData();
        })
        }
        if (method === 'put') {
          setLoaded(false)
          console.log(partnerData)
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
    const [search, setSearch] = useState('')
    const [previousPageLink, setPreviousPageLink] = useState('');
    const [nextPageLink, setNextPageLink] = useState('');
    const [page, setPage] = useState('/partners?page=1')
    const toPage = (link) => {
      setPage(link);
      loadData();
    }
   

    const setPartnerId = id => {
        let partner = data.filter(partner => partner.id == id)
        setPartnerToModify(partner[0]);
        setTimeout(() => childRef.current.handleShow(),500);
    }

    const dontRefresh = e => e.preventDefault();
 
    useEffect(() => 
      loadData(), 
      [activePartners, search]);

  return (
    <div>
        <div>{data ? '' : 'chargement...'}</div>
        {/* {error && <Navigate to="/disconnect" replace={true} />} */}
        <Header />
        <AddPartnerModal submitPartner={(name, address, postalCode, city, country, phone, description, logo, websiteUrl, active, defaultPerms, method, id) => submitPartner(name, address, postalCode, city, country, phone, description, logo, websiteUrl, active, defaultPerms, method, id)}/>
        {partnerToModify && <ModifyPartnerModal 
        submitPartner={(name, address, postalCode, city, country, phone, description, logo, websiteUrl, active, defaultPerms, method, id) => submitPartner(name, address, postalCode, city, country, phone, description, logo, websiteUrl, active, defaultPerms, method, id)}
        partner={partnerToModify} ref={childRef}/> }
        <Form onSubmit={dontRefresh} className="d-flex align-items-center justify-content-end mb-1">
        <Form.Group className="me-4 d-flex align-items-center" controlId="partner.city">
              <Form.Label className="mb-0 me-1" ><i class="fa-solid fa-magnifying-glass"></i></Form.Label>
              <Form.Control
                type="text"
                style={{width: 180}}
                placeholder="nom du partenaire"
                required
                onChange={(event) => setSearch(event.currentTarget.value)}
              />
            </Form.Group>
          <Form.Check
              type="switch"
              id="search-active"
              label="Actifs"
              className="d-flex justify-content-end me-2"
              defaultChecked={true}
              onChange={(event) => setActivePartners(event.currentTarget.checked)}
              />
        </Form>
        {loaded ? <MyTable parentData={data ? data : ''} setPartnerId={setPartnerId} previousPageLink={previousPageLink} nextPageLink={nextPageLink} toPage={(page) => toPage(page)}/>  : <Spinner animation="grow" variant="primary" />}
    </div>
  )
};