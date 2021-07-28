import React from 'react';
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

const spanStyle = {marginLeft: '50px'}
const footStyle = {marginTop: '150px'}

export default function Resume() {
  return (
    <div className="container-lg">
      <br></br>
      <br></br>
      <a href={'https://drive.google.com/file/d/1xWtYvc8htPDIWsXh4eu4aJK50WeHWnA1/view?usp=sharing'}><h2>Download my resume</h2></a>
      <div className="text-center"  style={footStyle}>
        <span><a href="https://github.com/minprocess"><FaGithub size='40px'/></a></span>
        <span style={spanStyle}><a href="https://linkedin.com/in/bill-pate"><FaLinkedin size='40px'/></a></span>
        <span style={spanStyle}><a href="mailto:#"><FaEnvelope size='40px'/></a></span>
      </div>
    </div>
  );
}
