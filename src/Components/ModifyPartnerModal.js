import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { CLIENT_MODULES } from '../helpers/CLIENT_MODULES';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const ModifyPartnerModal = forwardRef(({ partner, submitPartner }, ref) => {

  const [show, setShow] = useState(false);
  
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [active, setActive] = useState('');
  const [defaultPerms, setDefaultPerms] = useState('');
  const method = 'put';
  const id = partner.id

  useImperativeHandle(ref, () => ({
    handleShow() {
      setShow(true);
      setName(partner.name);
      setAddress(partner.address);
      setPostalCode(partner.postalCode);
      setCity(partner.city);
      setCountry(partner.country);
      setPhone(partner.phone);
      setDescription(partner.description);
      setLogo(partner.logo);
      setWebsiteUrl(partner.website_url);
      setActive(partner.active);
      setDefaultPerms(partner.defaultPerms);
    } 
    }));

 console.log(name)
  const handleClose = () => setShow(false);
  



  //delete perms module function
  const deleteElementFromArray = (array,element) => {
    let id = array.indexOf(element);
    if (id !== undefined) {
      return array.filter((item, index) => index !== array.indexOf(element))
      }
    else {
      return array
    }
  }

  const handleSubmit = () => {
    submitPartner(name, address, postalCode, city, country, phone, description, logo, websiteUrl, active, defaultPerms, method, id);
    handleClose();
  };

  
  return (
    <div onSubmit={submitPartner}>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Partenaire {partner.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="partner.name">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="XYZ COMPANY"
                autoFocus
                required
                defaultValue={name}
                onChange={(event) => setName(event.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.address">
              <Form.Label>Adresse</Form.Label>
              <Form.Control
                type="text"
                placeholder="numero, voie, étage..."
                required
                value={address}
                onChange={(event) => setAddress(event.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.postalCode">
              <Form.Label>Code Postal</Form.Label>
              <Form.Control
                type="text"
                placeholder="00000"
                required
                value={postalCode}
                onChange={(event) => setPostalCode(event.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.city">
              <Form.Label>Ville</Form.Label>
              <Form.Control
                type="text"
                placeholder="ville"
                required
                value={city}
                onChange={(event) => setCity(event.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.country">
              <Form.Label>Pays</Form.Label>
              <Form.Control
                type="text"
                value={country}
                required
                onChange={(event) => setCountry(event.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.phone">
              <Form.Label>Numéro de téléphone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="+33XXXXXXXXX"
                value={phone}
                required
                onChange={(event) => setPhone(event.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="partner.description"
            >
              <Form.Label>Descriptif et commentaires</Form.Label>
              <Form.Control as="textarea" value={description} rows={3} onChange={(event) => setDescription(event.currentTarget.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.logo">
              <Form.Label>Téléverser le logo du partenaire</Form.Label>
              <Form.Control
                type="file"
                placeholder="+33XXXXXXXXX"
                // onChange={(event) => setLogo('')}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.website">
              <Form.Label>Site internet</Form.Label>
              <Form.Control
                type="text"
                default="France"
                value={websiteUrl}
                onChange={(event) => setWebsiteUrl(event.currentTarget.value)}
              />
            </Form.Group>
            <Form.Check 
            type="switch"
            id="partner.active"
            label="Partenaire actif"
            defaultChecked={active}
            controlId="partner.active"
            onChange={(event) => setActive(event.currentTarget.checked)}
            />
            <h5 className='m-3 text-primary'>Modules activés par défaut pour les salles de ce partenaire</h5>
            {
                CLIENT_MODULES.map(clientModule => (
                    <Form.Check 
                    type="checkbox"
                    id={`${id}.${clientModule}`}
                    value={clientModule}
                    defaultChecked={defaultPerms.includes(clientModule)}
                    key={clientModule}
                    label={clientModule}
                    onChange={(event) => {

                      setDefaultPerms(event.currentTarget.checked ? [...defaultPerms, event.currentTarget.value] : deleteElementFromArray(defaultPerms, event.currentTarget.value));

                      }
                      }
                    />
                ))
            }
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Abandonner
          </Button>
          <Button variant="danger" onClick={handleSubmit}>
            Enregistrer les modifications
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
})

export default ModifyPartnerModal;