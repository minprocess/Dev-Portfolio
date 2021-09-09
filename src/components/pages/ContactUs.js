import React from 'react';
import emailjs from 'emailjs-com';

//import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();
    console.log("sendemail e.target")
    console.log(e.target)
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
  console.log("contactus")
  return (
    <div>
      <div className="container">
        <h1 class="pt-3 text-center">Contact Me</h1>
        <h3 class="pt-1 text-center">I would like to hear from you</h3>
        <form onSubmit={sendEmail}>
          <div className="row pt-3 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input type="text" className="form-control" placeholder="Name" name="name"/>
            </div>
            <div className="col-8 form-group pt-2  mx-auto">
              <input type="email" className="form-control" placeholder="Email Address" name="email"/>
            </div>
            <div className="col-8 form-group pt-2  mx-auto">
              <input type="text" className="form-control" placeholder="Subject" name="subject"/>
            </div>
            <div className="col-8 form-group pt-2  mx-auto">
              <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
            </div>
            <div className="col-8 pt-3  mx-auto">
              <input type="submit" className="btn btn-info" value="Send message"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
   );
}