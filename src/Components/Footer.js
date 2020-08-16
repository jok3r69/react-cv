import React from 'react';
import { Navbar } from 'react-bootstrap';
import {
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';

function MyFooter() {
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">© Kondrat Kristof 2020</Navbar.Brand>
            <div className="social-life">
                <a href="https://github.com/jok3r69"
                    className="mr-4"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaGithub></FaGithub>
                </a>
                <a href="https://twitter.com/kristofkondrat"
                    className="mr-4"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaTwitter></FaTwitter>
                </a>
                <a href="https://www.facebook.com/kondrat.kristof/"
                    className="mr-4"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaFacebookF></FaFacebookF>
                </a>
                <a href="https://www.instagram.com/the.kondrat/"
                    className="mr-4"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaInstagram></FaInstagram>
                </a>
                <a href="https://www.linkedin.com/in/kondrat-kristof-bb560a88/"
                    className="mr-4"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaLinkedinIn></FaLinkedinIn>
                </a>
            </div>
        </Navbar>

    );

}

export default MyFooter;