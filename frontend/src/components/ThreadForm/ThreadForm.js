import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FileInput from '../UI/FileInput/FileInput';
import { useDispatch } from 'react-redux';
import { CreateThread } from '../../store/services/ThreadSlice';


const ThreadForm = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        author: '',
        message: '',
        image: ''
    });

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    const fileChangeHandler = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        setState(prevState => ({ ...prevState, [name]: file }));
    }

    const submitHandler = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in state) {
            formData.append(key, state[key])
        }
        await dispatch(CreateThread(formData));
        setState({
            author:'',
            message:'',
            image:''
        })
    }

    return (
        <Form style={{width:'800px'}} onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    name="author"
                    value={state.author}
                    onChange={inputChangeHandler}
                    type="text"
                    placeholder="Anonymus"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    value={state.message}
                    name="message"
                    onChange={inputChangeHandler}
                    rows={3}
                    type="text"
                    required
                />
            </Form.Group>
            <FileInput
                name="image"
                image={state.image}
                onChange={fileChangeHandler}
                title="Upload File"
            />
            <Button variant="primary" type="submit">
                Create
            </Button>
        </Form>
    )
}

export default ThreadForm;