import { Button, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function DetailedPost({ match: { params: { id } } }) {
    const history = useHistory();
    const [name, setName] = useState("Loading");
    const [caption, setCaption] = useState("Loading . . .");
    const [img, setImg] = useState("https://via.placeholder.com/250x200?text=image+loading");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/post/${id}`);
                const data = await res.json();
                if (data.success) {
                    const post = data.data;
                    setName(post.name);
                    setCaption(post.caption);
                    setImg(post.url);
                    setLoading(false);
                }
                else {
                    console.log("not found");
                    history.push('/404');
                }
            } catch (error) {
                console.log("incorrect id");
                history.push('/404');
            }
        }
        fetchData();
    }, [id, history]);

    const deletePostHandler = e => {
        setLoading(true);

        fetch(`/api/post/${id}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                history.push('/show');
            }
        })
        .catch(err => {
            console.log(err);
        }) 
    }

    return (
        <Card style={{ width: '80%', margin: 'auto', textAlign: 'center' }}>
            <Card.Img variant="top" src={img} alt="post img" style={{maxHeight: '300px', minHeight: '200px', margin: 'auto', width: "auto", maxWidth: '100%'}} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{caption}</Card.Text>
                <Button disabled={loading}  onClick={deletePostHandler} variant="danger">delete</Button>
            </Card.Body>
        </Card>
    )
}
