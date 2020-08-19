import React, { Component } from 'react';
import '../App.css'
import * as fontawesome from '@fortawesome/fontawesome-svg-core';
import {
    FaGithub
} from 'react-icons/fa';

function Portfolio() {

    return (
        <>
        <div className="portfolio-cards">
        <div className="container">
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <div className="icon">
                       <FaGithub size={70} className="githubIcon" aria-hidden="true"/>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3 >
                        <a  href="https://github.com/jok3r69/xoxoxoxo" target="_blank" ><button class="button">Tic Tac Toe</button></a>
                    </h3>
                    <p>Wanna play a game? This is the vintage tic tac toe</p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <div className="icon">
                    <FaGithub size={70} className="githubIcon" aria-hidden="true"/>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3>
                        <a href="https://github.com/jok3r69/CSS-webshop" target="_blank"><button class="button button2">Webshop template</button></a>
                    </h3>
                    <p>I also made a template for a webshop.</p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <div className="icon">
                    <FaGithub size={70} className="githubIcon" aria-hidden="true"/>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3>
                        <a href="https://github.com/jok3r69/react-cv" target="_blank"><button class="button button3">Awesome website</button></a>
                    </h3>
                    <p>Check out the code I wrote for this website</p>
                </div>
            </div>
        </div>
    </div>
    </div>
        </>
    );
}

export default Portfolio;