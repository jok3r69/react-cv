import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../App.css';
import darkmode from './darkMode';

export default function MyHeader(props) { 
    return (
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Kondrat Kristof</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/AboutMe">About me</Nav.Link>
                    <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
                    
                </Nav>
                <Nav.Link href="/Contact">Contact</Nav.Link>
            <script type="text/javascript" src="darkmode.js"></script>
            <div class="toggle">
                <input 
                  value={props.mode}
                  type="checkbox" 
                  id="toggle" 
                  onClick={() => props.switchMode()} 
                />
                <label for="toggle"></label>
            </div>
            </Navbar.Collapse>

        </Navbar>
    );
}
