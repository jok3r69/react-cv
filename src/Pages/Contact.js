import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import '../App.css';
// import Resume.pdf from '.';


function ContactPage() {
  const [showModal, setShowModal] = useState(false);
  function sendEmail(e) {
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

      {/* <a href="./assets/Resume.pdf" download="Resume.pdf">
        <img src="/images/myw3schoolsimage.jpg" alt="W3Schools" width="104" height="142"></img>
      </a> */}
      <div className='container'>
        <h1 className="contact-h1">For more info, feel free to contact me!</h1>
        <div className="form-container">
          <form action="action_page.php" onSubmit={sendEmail}>

            <label for="fname">Full Name</label>
            <input type="text" id="fname" name="fullname" placeholder="Your full name.."></input>

            <label for="email">Your eMail</label>
            <input type="text" name="email" id="email" placeholder="test@test.com"></input>

            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Feel free to contact me..."></textarea>

            <input type="submit" value="Send"></input>

          </form>
        </div>
      </div>
    </>
  )
}

export default ContactPage;