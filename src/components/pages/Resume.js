import React from 'react';
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

const spanStyle = {marginLeft: '50px'}
const footStyle = {marginTop: '150px'}

export default function Resume() {
  return (
    <div className="container-lg">
      <br></br>
      <h2>Resume</h2>
      <br></br>
      <a href={'https://drive.google.com/file/d/1xWtYvc8htPDIWsXh4eu4aJK50WeHWnA1/view?usp=sharing'}><h2>Download my resume</h2></a>
      <br></br>
      <h2>Front-end Proficiencies</h2>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ol>
      <h2>Back-end Proficiencies</h2>
      <ol>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoos</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ol>
      <br></br>

      <div className="text-center"  style={footStyle}>
        <span><a href="https://github.com/minprocess"><FaGithub size='40px'/></a></span>
        <span style={spanStyle}><a href="https://linkedin.com/in/bill-pate"><FaLinkedin size='40px'/></a></span>
        <span style={spanStyle}><a href="mailto:#"><FaEnvelope size='40px'/></a></span>
      </div>
    </div>
  );
}
