import React from 'react';
import emailjs from 'emailjs-com';

//import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_gvkrcyk', 'template_wo28fg7', e.target, 'user_bvSWuIn4sd1pAIdgolpE1')
      .then((result) => {
        console.log('result')
        console.log(result.text);
      }, (error) => {
        console.log('error')
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}