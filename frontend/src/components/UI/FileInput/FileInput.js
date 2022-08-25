import React from "react";
import { Card, Form } from 'react-bootstrap';

const FileInput = ({ onChange, name, title, image }) => {
    return (
        <>
            <Form.Group controlId="formFile" className="mb-3">
                {title}
                <Form.Control name={name} onChange={onChange} accept="image/*" type="file" />
            </Form.Group>

            <Card.Title style={{marginBottom:'30px'}}>Image:{image?.name}</Card.Title>

        </>
    )
}

export default FileInput;