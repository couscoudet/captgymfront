import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import MyButton from './MyButton';
import { CLIENT_MODULES } from '../helpers/CLIENT_MODULES';
import http from '../helpers/http';

export default function AddPartnerModal({ submitPartner }) {
  const [show, setShow] = useState(false);
  // const [message, setMessage] = useState('');

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [website, setWebsite] = useState('');
  const [active, setActive] = useState(true);
  const [modulePerms, setModulePerms] = useState({recrutement: false, boissons: false, planning: false, newsletter: false});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleChange = (event) => {
  //   setMessage(event.target.value);
  //   console.log(event.target.value);
    
  // }

  const handleSubmit = () => {
    submitPartner(name, address, postalCode, city, country, phone, description, logo, website, active);
    handleClose();
  };


  return (
    <div onSubmit={submitPartner}>
      <MyButton onClick={handleShow}>Ajouter un partenaire</MyButton>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Ajouter un partenaire</Modal.Title>
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
                onChange={(event) => setName(event.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.address">
              <Form.Label>Adresse</Form.Label>
              <Form.Control
                type="text"
                placeholder="numero, voie, étage..."
                required
                onChange={(event) => setAddress(event.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.postalCode">
              <Form.Label>Code Postal</Form.Label>
              <Form.Control
                type="text"
                placeholder="00000"
                required
                onChange={(event) => setPostalCode(event.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.city">
              <Form.Label>Ville</Form.Label>
              <Form.Control
                type="text"
                placeholder="ville"
                required
                onChange={(event) => setCity(event.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.country">
              <Form.Label>Pays</Form.Label>
              <Form.Control
                type="text"
                default="France"
                required
                onChange={(event) => setCountry(event.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.phone">
              <Form.Label>Numéro de téléphone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="+33XXXXXXXXX"
                required
                onChange={(event) => setPhone(event.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="partner.description"
            >
              <Form.Label>Descriptif et commentaires</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(event) => setDescription(event.currentTarget.value)}/>
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
                onChange={(event) => setWebsite(event.currentTarget.value)}
              />
            </Form.Group>
            <Form.Check 
            type="switch"
            id="partner.active"
            label="Partenaire actif"
            defaultChecked={true}
            controlId="partner.active"
            onChange={(event) => setActive(event.currentTarget.checked)}
            />
            <h5 className='m-3 text-primary'>Modules activés par défaut pour les salles de ce partenaire</h5>
            {
                CLIENT_MODULES.map(clientModule => (
                    <Form.Check 
                    type="checkbox"
                    id={`partner.${clientModule}`}
                    value={clientModule}
                    key={clientModule}
                    label={clientModule}
                    onChange={(event) => setModulePerms(modulePerms.event.currentTarget.value = event.currentTarget.checked)}
                    />
                ))
            }
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
