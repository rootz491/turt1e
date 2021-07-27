import React from 'react'
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" className="mb-4">
            <Container>
                <Link to="/">Home</Link>
                <Link to="/post">post</Link>
                <Link to="/show">show</Link>
            </Container>
        </Navbar>
    )
}
