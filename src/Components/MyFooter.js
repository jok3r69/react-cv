import React from 'react';
import { Navbar } from 'react-bootstrap';
// import '../src/App.css'

function MyFooter() {
    return(
        <Navbar fixed="bottom" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">© Kondrat Kristof 2020</Navbar.Brand>
        <i className="fa fa-instagram"></i>
    </Navbar>
    );
}

export default MyFooter;