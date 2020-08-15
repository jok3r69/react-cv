import React from 'react';
import '../App.css';
// import Resume.pdf from '.';

function ContactPage() {
  return (
    <>

      {/* <a href="./assets/Resume.pdf" download="Resume.pdf">
        <img src="/images/myw3schoolsimage.jpg" alt="W3Schools" width="104" height="142"></img>
      </a> */}
      <h1 class="contact-h1">For more info, feel free to contact me!</h1>
      <div class="form-container">
        <form action="action_page.php">

          <label for="fname">Full Name</label>
          <input type="text" id="fname" name="fullname" placeholder="Your full name.."></input>

          <label for="email">Your eMail</label>
          <input type="text" id="email" placeholder="test@test.com"></input>

          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Feel free to contact me..."></textarea>

          <input type="submit" value="Submit"></input>

        </form>
      </div>
    </>
  )
}

export default ContactPage;