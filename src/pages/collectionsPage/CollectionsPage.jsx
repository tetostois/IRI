import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import LoginSingup from '../../composants/login/LoginSingup';

const CollectionsPage = () => {
    const [show, setShow] = useState(false);

    const handleFermer = () => setShow(false);
    const handleOuvrir = () => setShow(true);

    return (
        <>
            <button onClick={handleOuvrir}>Connectez-vous</button>
            <Modal show={show} onHide={handleFermer}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: 'center' }}>Connexion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <LoginSingup />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CollectionsPage;
