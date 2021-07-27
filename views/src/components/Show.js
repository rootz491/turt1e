import React, { useEffect, useState } from 'react'
import { Card, Button, Alert } from "react-bootstrap";

export default function Show() {
    const [posts, setPosts] = useState([]);
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("/api/get")
            .then((res) => res.json())
            .then((data) => {
            setPosts(data.data);
            });
    }, [])

    const deletePostHandler = e => {
        let card = e.target.parentElement.parentElement;
        let postId = e.target.parentElement.parentElement.id;
        setLoading(true);
        setSuccess('');

        fetch(`/api/post/${postId}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                console.log(data.data);
                setSuccess(`Post by ${data.data.name} is successfully deleted!`);
                card.remove();
                setLoading(false);
            }
        })
        .catch(err => {
            console.log(err);

        }) 
    }

    return (
        <>
        {success && <Alert variant="success">{success}</Alert>}
        <div className="row justify-content-center gap-4">
            {
                posts ? 
                posts.map(post => {
                    return  <Card key={post._id} id={post._id} style={{ width: '18rem' }}>
                                <Card.Img style={{maxHeight: "120px", width: "auto", margin: "auto"}} variant="top" src={post.url || "https://via.placeholder.com/150x75?text=placeholder+image"} />
                                <Card.Body>
                                    <Card.Title>{post.name}</Card.Title>
                                    <Card.Text>{post.caption}</Card.Text>
                                    <Button disabled={loading} onClick={deletePostHandler} variant="danger">delete</Button>
                                </Card.Body>
                            </Card>
                }) :
                <h1>No posts available</h1>
            }
        </div>
        </>
    )
}
