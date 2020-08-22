import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import '../App.css';
// import Resume.pdf from '.';


function ContactPage() {
  const [showModal, setShowModal] = useState(false);
  function sendEmail(e) {
    console.log(e.target);
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_test', e.target, 'user_qzbTJOI9o6aAwYWhA9ywd')
      .then((result) => {
        if (result.text === "OK") {
          setShowModal(!showModal)
        }
      }, (error) => {
        alert(error.text);
      });
  };

  return (
    <>
      <div className="container">
        <h1 className="contact-h1">For more info, feel free to contact me!</h1>
        <div className="form-container">
          <form action="action_page.php" onSubmit={sendEmail}>

            <label form="fname">Full Name</label>
            <input type="text" id="fname" name="fullname" data-displayname="fullname" placeholder="Your full name.." required />

            <label form="email">Your eMail</label>
            <input type="text" name="email" id="email" data-displayname="email"placeholder="test@test.com" required />

            <label form="subject">Subject</label>
            <textarea id="subject" name="subject" data-displayname="subject" placeholder="Feel free to contact me..." required />

            <input type="submit" value="Send"></input>

          </form>
        </div>
      </div>
    </>
  )
}

export default ContactPage;