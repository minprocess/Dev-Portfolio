import React from 'react';
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

const spanStyle = {marginLeft: '50px'}
const footStyle = {marginTop: '150px'}

export default function About() {
  return (
    <div className="container-lg">
      <br></br>
      <br></br>
      <h3>About me, William Pate</h3>
      <br></br>
      <p>
          I am looking for full-time, part-time or freelance work as a full stack web developer. I am taking a Full Stack Web Development coding bootcamp which ends in mid-August.
      </p>
      <p>          
          Prior to that I spent 35+ years in the mineral processing industry programming Windows programs for simulation, estimation and optimization of mineral processing operations.
      </p>
      <p>
        So I am also looking for full-time, part-time or freelance work as a C++ or C# programmer.
      </p>
      <p>
          I have a Ph.D. in Metallurgical Engineering and upon obtaining that I spent 10 years programming real-time estimation programs for mineral processing as well programming estimation algorthims for estimation of model parameters from lab and plant testwork. I programmed them first in Fortran and then in C++. Then I spent another 15 years programming dynamic simulators for mineral processing plants. They could be used for sizing equipment given the failure rates of equipment and the time to repair them.
      </p>

      <div className="text-center"  style={footStyle}>
        <span><a href="https://github.com/minprocess"><FaGithub size='40px'/></a></span>
        <span style={spanStyle}><a href="https://linkedin.com/in/bill-pate"><FaLinkedin size='40px'/></a></span>
        <span style={spanStyle}><a href="mailto:#"><FaEnvelope size='40px'/></a></span>
      </div>
    </div>
  );
}
