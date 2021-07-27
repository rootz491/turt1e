import React, { useRef, useState } from 'react';
import { Form, Button, Alert, Card } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

export default function Post() {
    const nameRef = useRef("");
    const captionRef = useRef("");
    const [img, setImg] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const PostHandler = e => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData();
		formData.append('File', img);
		formData.append('name', nameRef.current.value);
		formData.append('caption', captionRef.current.value);
        
        fetch('/api/post', {
            method: 'POST',
            body: formData
        })
        .then(history.push("/show"))
        .catch(err => {
            console.log(err)
            setError(err);
            setLoading(false);
        })
    }

    const FileChangeHandler = e => {
        setImg(e.target.files[0]);
        console.log(img);
    }

    return (

        <Card className="p-2" style={{maxWidth: "400px", margin: "auto"}}>
            <Card.Body>
                <h1 className="text-center mb-4">Post stuff from here</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={PostHandler}>
                    <Form.Group id="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required />
                    </Form.Group>
                    <Form.Group id="caption" className="mt-4">
                        <Form.Label>Caption</Form.Label>
                        <Form.Control ref={captionRef} as="textarea" rows={3} required />
                    </Form.Group>
                    <Form.Group id="img" className="mt-4">
                        <Form.Label>image</Form.Label>
                        <input name="image" onChange={FileChangeHandler} type="file" required />
                    </Form.Group>
                    <div className="d-flex justify-content-center mt-4">
                        <Button disabled={loading} className="w-40" type="submit" >post</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>

    )
}
