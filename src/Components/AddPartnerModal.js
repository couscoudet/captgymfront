import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import MyButton from './MyButton';
import { CLIENT_MODULES } from '../helpers/CLIENT_MODULES';

export default function AddPartnerModal() {
  const [show, setShow] = useState(false);
  // const [message, setMessage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleChange = (event) => {
  //   setMessage(event.target.value);
  //   console.log(event.target.value);
    
  // }

  return (
    <>
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
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.address">
              <Form.Label>Adresse</Form.Label>
              <Form.Control
                type="text"
                placeholder="numero, voie, étage..."
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.postalCode">
              <Form.Label>Code Postal</Form.Label>
              <Form.Control
                type="text"
                placeholder="00000"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.city">
              <Form.Label>Ville</Form.Label>
              <Form.Control
                type="text"
                placeholder="ville"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.country">
              <Form.Label>Pays</Form.Label>
              <Form.Control
                type="text"
                default="France"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.phone">
              <Form.Label>Numéro de téléphone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="+33XXXXXXXXX"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="partner.description"
            >
              <Form.Label>Descriptif et commentaires</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.logo">
              <Form.Label>Téléverser le logo du partenaire</Form.Label>
              <Form.Control
                type="file"
                placeholder="+33XXXXXXXXX"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="partner.website">
              <Form.Label>Site internet</Form.Label>
              <Form.Control
                type="text"
                default="France"
              />
            </Form.Group>
            <Form.Check 
            type="switch"
            id="partner.active"
            label="Partenaire actif"
            defaultChecked={true}
            />
            <h5 className='m-3 text-primary'>Modules activés par défaut pour les salles de ce partenaire</h5>
            {
                CLIENT_MODULES.map(clientModule => (
                    <Form.Check 
                    type="checkbox"
                    id={`partner.${clientModule}`}
                    label={clientModule}
                    />
                ))
            }
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
