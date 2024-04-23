import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";

const Form = ({ onSubmit }) => {
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(answer);
    };

    return (
        <div className="container">
            <FormGroup>
                <FormLabel>Votre réponse</FormLabel>
                <FormControl
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
            </FormGroup>
            <Button variant="primary" onClick={handleSubmit}>
                Valider
            </Button>
        </div>
    );
};

export default Form;
