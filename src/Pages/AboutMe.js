import React from 'react';
import '../App.css';
import 'react-bootstrap';
import '@fortawesome/fontawesome-svg-core';
import {
  FaHatWizard,
  FaCalculator,
  FaHardHat,
  FaBlackTie,
  FaInfoCircle,
  FaChartLine,
  FaDev,
  FaFeatherAlt,
} from 'react-icons/fa';


function AboutMe() {
  return (
    <div className="about-grid">
      <div className="contact-grid">
        <h5><FaCalculator></FaCalculator>PERSONAL PROJECTS</h5>
        <p>Learning German (2019 - Present)</p>
        <p>Minutul Financiar (10/2018 - Present)</p>
        <h5><FaChartLine></FaChartLine>INTERESTS</h5>
        <p>Stock Exchange</p>
        <p>Investments</p>
        <p>New Technology</p>
        <p>Cryptocurrency</p>
        <p>Photography</p>
        <p>Economics</p>
      </div>
      <div className="cv-grid">
          <h5><FaHatWizard />2020-02 - 2020-08  The Informal School of IT – Web Development (JavaScript)</h5>
        <p>Web Concepts: How the web works, Client-Server architecture, protocols</p>
        <p>HTTP: fundamentals about the protocol: methods, status codes, headers, cookies and sessions</p>
        <p>HTML and CSS: how to build a responsive User Interface with semantic HTML elements</p>
        <p>JavaScript: how to use variables, primitive types, functions, hoisting, objects, scope, DOM, AJAX and Promises</p>
        <p>OOP in JavaScript: prototypes, classes and inheritance in JavaScript</p>
        <p>GIT: learned the principles and basic commands</p>
        <p>jQuery: how to include it in a project and how to use it, why it’s helpful, selectors</p>
        <p>React JS: how modern JS applications work, React components, props, state, JSX</p>
          <h5><FaHardHat></FaHardHat>01/2019 - Present, Real Estate Market Analyst at Yardi</h5>
        <p>Agile scrum methodology, using jira for tickets</p>
        <p>Multiple daily calls with property managers and property owners</p>
        <p>Weekly meetings about the team performance</p>
        <p>Monthly global meetings with the team from USA</p>
          <h5><FaBlackTie></FaBlackTie>Regional Manager at Szicsek Palinkafozde KFT</h5>
        <p>Creating the documents for the import</p>
        <p>Managing the transport from Hungary to Romania</p>
        <p>Managing the orders and the delivery</p>
          <h5><FaInfoCircle></FaInfoCircle>QA intern at QuanticLab</h5>
        <p>Finding bugs in different games on PS platform.</p>
        <p>Daily task reports.</p>
        <p>Introducing the bug's on different platforms like Mantis, Bugzilla.</p>
      </div>
      <div className="skills-grid">
          <h5><FaFeatherAlt></FaFeatherAlt>Some of my soft skills</h5>
        <p>Photography</p>
        <p>Problemsolver</p>
        <p>Analytical thinking</p>
        <p>Fast learner</p>
        <p>Team player</p>
        <p>Internet research</p>
        <p>Analytical mindset</p>
          <h5><FaDev></FaDev>Some of my hard skills</h5>
        <p>HTML</p>
        <p>CSS3 (As you can see, it's not a strength[YET])</p>
        <p>JavaScript</p>
        <p>React.JS</p>
        <p></p>
      </div>
    </div>
  );
}

export default AboutMe;