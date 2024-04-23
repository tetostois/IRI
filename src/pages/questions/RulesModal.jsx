import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const RulesModal = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header style={{ backgroundColor: 'red' }} closeButton>
                <Modal.Title style={{ textAlign: 'center' }}>Rappel des règles</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: 'red' }}>
                <p>Once the quiz has started, you cannot quit before completing!!
                    Make Sure you are Fully Ready for it!!
                    Remember you are a sun to shine and also to learn!!
                    Make Sure the answer is selected in the box provided beside the question!!</p>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: 'red' }}>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RulesModal;




