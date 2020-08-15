import React from 'react';
import { Navbar } from 'react-bootstrap';
// import bootstrap.min.cla


// import '../src/App.css'

function MyFooter() {
    return(
        <Navbar fixed="bottom" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">© Kondrat Kristof 2020</Navbar.Brand>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-envelope"></i>
        <i class="fa fa-envelope"></i>
    </Navbar>
    );
}

export default MyFooter;