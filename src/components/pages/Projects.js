import React from 'react';
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import ProjectCard from './ProjectCard';

export default function ProjectDisplay() {

const spanStyle = {marginLeft: '50px'}
const footStyle = {marginTop: '150px'}

// Array of js objects with properties of my web projects so far (Jun 27 2021)
var projObj = [
  {
    projTitle: "Quizzler",
    gitHubRepo: "https://github.com/minprocess/Quizzler",
    deployLink: "https://quizzler-2542.herokuapp.com/",
    imageName: "23-Quizzler-screenshot.png",
    desc: "Application to give a French language quiz. Used starter code.",
    tech: "apollo-server-express, graphql, express, bcrypt, dotenv, jsonwebtoken, express, mongoose, mongoose-random for the server. apollo/client, graphql, jwt-decode, react, react-dom, react-router-dom, react-scripts for the client.",
    altText: "Home page of Quizzler app"
  },
  {
    projTitle: "Workout Tracker",
    gitHubRepo: "https://github.com/minprocess/18-Workout-Tracker",
    deployLink: "https://workout-tracker-2542.herokuapp.com/",
    imageName: "18-Snapshot-homepage-workout-tracker.png",
    desc: "Workout Tracker is a full stack web app to view, create and track daily workouts. Used starter code.",
    tech: "Node, Express, Mongoose and JavaScript for the backend. HTML, CSS and Javascript for the frontend.",
    altText: "Home page of Workout Tracker app"
  },
  {
    projTitle: "Using a regex for validating a password string",
    gitHubRepo: "https://gist.github.com/minprocess/16c6bdaed839229df6c8d7125fb6277c",
    deployLink: "",
    imageName: "17-screenshot-using-a-regex-validating.png",
    desc: "A Gist explaining a regular expression that can be used to validate a password.",
    tech: "Gist on GitHub, Markdown",
    altText: "Gist article explaining a regex for validating a password string"
  },
  {
    projTitle: "Tech Blog",
    gitHubRepo: "https://github.com/minprocess/14-Tech-Blog",
    deployLink: "https://tech-blog-2542.herokuapp.com/",
    imageName: "14-homepage-tech-blog.png",
    desc: "A full stack website hosting a blog (The Tech Blog) allowing users to post articles and to post comments about articles.",
    tech: "Node, bcrypt, connect-session-sequelize, dotenv, eslint, express, express-handlebars, express-session, MySQL2, Sequelize.js",
    altText: "Home page of the Tech Blog app"
  },
  {
    projTitle: "E-commerce-backend",
    gitHubRepo: "https://github.com/minprocess/13-E-Commerce-Backend",
    deployLink: "https://ecomm-backend-2542.herokuapp.com/",
    imageName: "13-Insomnia_requests_for_backend_on_Heroku.png",
    desc: "Backend for an e-commerce website. Insomnia is used to test the CRUD actions. Used starter code",
    tech: "Node, Javascript, dotenv, express, MySQL2, Sequelize.js",
    altText: "Insomnia app showing transactions used with the backend"
  },
  {
    projTitle: "Employee Tracker",
    gitHubRepo: "https://github.com/minprocess/12-Employee-Tracker",
    deployLink: "",
    imageName: "12-Main_menu_of_Employee_Tracker.png",
    desc: "A command-line application that allows the user to interact with a MySQL database containing three tables of employee information.",
    tech: "Node, JavaScript, console.table, Inquirer.js, MySQL2",
    altText: "Snapshot of interface to a MySQL database made with Inquirer.js"
  },
]

// See Activity 10-Stu_Props in Unit 20-React
  return (
    <div className="container-lg">
      <div className="row row-cols-3">
          {projObj.map((card, idx) => (<ProjectCard key={idx} card={card} />))}
      </div>
      <div className="text-center"  style={footStyle}>
        <span><a href="https://github.com/minprocess"><FaGithub size='40px'/></a></span>
        <span style={spanStyle}><a href="https://linkedin.com/in/bill-pate"><FaLinkedin size='40px'/></a></span>
        <span style={spanStyle}><a href="mailto:#"><FaEnvelope size='40px'/></a></span>
      </div>
    </div>
  );
}
