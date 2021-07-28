import React from 'react';
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import {} from "react-icons/fa";

export default function Resume() {
  return (
    <div className="container-lg">
      <br></br>
      <br></br>
      <a href={'https://drive.google.com/file/d/1xWtYvc8htPDIWsXh4eu4aJK50WeHWnA1/view?usp=sharing'}><h2>Download my resume</h2></a>
      <div className="center">
        <span><a href="https://github.com/minprocess"><FaGithub size='2em'/></a>GitHub</span>
        <span><a href="https://linkedin.com/in/bill-pate"><FaLinkedin size='2em' /></a>LinkedIn</span>
        <span><a href="https://linkedin.com/in/bill-pate"><FaEnvelope size='2em'/></a>Send me a message</span>
      </div>
    </div>
  );
}
