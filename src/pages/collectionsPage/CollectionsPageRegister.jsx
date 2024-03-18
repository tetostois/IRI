import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FormulaireEnregistrement from '../register/Register';

const CollectionsPageRegister = () => {
    const [show, setShow] = useState(false);

    const handleFermer = () => setShow(false);
    const handleOuvrir = () => setShow(true);

    return (
        <>
            <button onClick={handleOuvrir}>Enroulez-vous</button>
            <Modal show={show} onHide={handleFermer}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: 'justify' }}>Enregistrez-vous</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FormulaireEnregistrement />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CollectionsPageRegister;
