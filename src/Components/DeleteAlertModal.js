import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import MyButton from './MyButton';
import { CLIENT_MODULES } from '../helpers/CLIENT_MODULES';
import http from '../helpers/http';

export default function DeleteAlertModal({ item, showModal, deletePartner }) {
  const [show, setShow] = useState(showModal);
  // const [message, setMessage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleChange = (event) => {
  //   setMessage(event.target.value);
  //   console.log(event.target.value);
    
  // }

  const deleteElementFromArray = (array,element) => {
    let id = array.indexOf(element);
    if (id !== undefined) {
      console.log(array)
      return array.filter((item, index) => index !== array.indexOf(element))
      }
    else {
      return array
    }
  }

  const handleSubmit = () => {
    handleClose();
  };


  return (
    <div onSubmit={deletePartner}>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Ajouter un partenaire</Modal.Title>
        </Modal.Header>
        <h1 className="text-info">Attention: vous allez supprimer cette occurence</h1>
        <Modal.Body>
        <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Confirmer
          </Button>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </div>
  );
}
