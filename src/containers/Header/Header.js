import React from "react";
import { Container, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">RemoteDo</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-auto" />
          <Button className="mr-auto" variant="outline-info">Search</Button>
        </Form>

        <Nav className="mr-sm-2">
          <Nav.Link >
            <Link to='/findJob'>Find Job</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/postJob'>Post Job</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/dashboard'>Dashboard</Link>
          </Nav.Link>
          <Nav.Link >
            <Link to='/login'>Login</Link>
          </Nav.Link>
          <Nav.Link >
            <Link to='/createAccount'>Create Account</Link>
          </Nav.Link>
          <Nav.Link >
            <Link to='/profile'>Profile</Link>
          </Nav.Link>
          
        </Nav>
        
        </Container>
      </Navbar>

  );
}
