import React from 'react';
import '../App.css';


function AboutMe() {
  return (
    <div class="about-grid">
      <div class="contact-grid">
        <h5>If you want to reach out, here is my contact info</h5>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
     </div>
        <div class="cv-grid">
          <h5><i class="fa fa-graduation-cap"></i>2020-02 - 2020-08  The Informal School of IT – Web Development (JavaScript)</h5>
          <p>Web Concepts: How the web works, Client-Server architecture, protocols</p>
          <p>HTTP: fundamentals about the protocol: methods, status codes, headers, cookies and sessions</p>
          <p>HTML and CSS: how to build a responsive User Interface with semantic HTML elements</p>
          <p>JavaScript: how to use variables, primitive types, functions, hoisting, objects, scope, DOM, AJAX & Promises</p>
          <p>OOP in JavaScript: prototypes, classes and inheritance in JavaScript</p>
          <p>GIT: learned the principles and basic commands</p>
          <p>jQuery: how to include it in a project and how to use it, why it’s helpful, selectors</p>
          <p>React JS: how modern JS applications work, React components, props, state, JSX</p>
          <h5><i class="fa fa-graduation-cap"></i>01/2019 - Present, Real Estate Market Analyst at Yardi</h5>
          <p>Agile scrum methodology, using jira for tickets</p>
          <p>Multiple daily calls with property managers and property owners</p>
          <p>Weekly meetings about the team performance</p>
          <p>Monthly global meetings with the team from USA</p>
          <h5>Regional Manager at Szicsek Palinkafozde KFT</h5>
          <p>Creating the documents for the import</p>
          <p>Managing the transport from Hungary to Romania</p>
          <p>Managing the orders and the delivery</p>
          <h5>QA intern at QuanticLab</h5>
          <p>Finding bugs in different games on PS platform.</p>
          <p>Daily task reports.</p>
          <p>Introducing the bug's on different platforms like Mantis, Bugzilla.</p>
      </div>
      <div class="skills-grid"> 3</div>
      <i className="fa fa-graduation-cap">12</i>
    </div>
  );
}

export default AboutMe;