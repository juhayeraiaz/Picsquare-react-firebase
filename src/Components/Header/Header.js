import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/site-logo.png'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top' className='p-3'>
                <Container>
                    <Navbar.Brand href="#home"><img
                        src={logo}
                        width='160px'
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='mt-4 text-center mt-md-0'>
                            <Nav.Link href="#pricing">Blogs</Nav.Link>
                            <Nav.Link href="#deets">Works</Nav.Link>
                            <Nav.Link href="#memes">
                                Services
                            </Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;