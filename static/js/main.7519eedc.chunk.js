(this["webpackJsonpdev-portfolio"]=this["webpackJsonpdev-portfolio"]||[]).push([[0],{14:function(e,t){},25:function(e,t,c){},27:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(8),i=c.n(n),r=(c(25),c(26),c(10)),o=c(16),l=c(35),j=(c(27),c(0));var d=function(e){var t=e.currentPage,c=e.handlePageChange;return Object(j.jsx)("div",{className:"container-lg",children:Object(j.jsxs)(l.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(j.jsx)(o.a,{children:"William Pate"}),Object(j.jsx)(l.a.Toggle,{"aria-controls":"navbar"}),Object(j.jsx)(l.a.Collapse,{id:"navbar",children:Object(j.jsxs)("ul",{className:"navbar-nav mx-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"#about",onClick:function(){return c("About")},className:"About"===t?"nav-link active":"nav-link",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"#projects",onClick:function(){return c("Projects")},className:"Projects"===t?"nav-link active":"nav-link",children:"Projects"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"#contact",onClick:function(){return c("Contact")},className:"Contact"===t?"nav-link active":"nav-link",children:"Contact"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"#resume",onClick:function(){return c("Resume")},className:"Resume"===t?"nav-link active":"nav-link",children:"Resume"})})]})})]})})},p=c(3),h={marginLeft:"50px"},b={marginTop:"150px"};function m(){return Object(j.jsxs)("div",{className:"container-lg",children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h3",{children:"About me, William Pate"}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"I am looking for full-time, part-time or freelance work as a full stack web developer. I am taking a Full Stack Web Development coding bootcamp which ends in mid-August."}),Object(j.jsx)("p",{children:"Prior to that I spent 35+ years in the mineral processing industry programming Windows programs for simulation, estimation and optimization of mineral processing operations."}),Object(j.jsx)("p",{children:"So I am also looking for full-time, part-time or freelance work as a C++ or C# programmer."}),Object(j.jsx)("p",{children:"I have a Ph.D. in Metallurgical Engineering and upon obtaining that I spent 10 years programming real-time estimation programs for mineral processing as well programming estimation algorthims for estimation of model parameters from lab and plant testwork. I programmed them first in Fortran and then in C++. Then I spent another 15 years programming dynamic simulators for mineral processing plants. They could be used for sizing equipment given the failure rates of equipment and the time to repair them."}),Object(j.jsxs)("div",{className:"text-center",style:b,children:[Object(j.jsx)("span",{children:Object(j.jsx)("a",{href:"https://github.com/minprocess",children:Object(j.jsx)(p.b,{size:"40px"})})}),Object(j.jsx)("span",{style:h,children:Object(j.jsx)("a",{href:"https://linkedin.com/in/bill-pate",children:Object(j.jsx)(p.c,{size:"40px"})})}),Object(j.jsx)("span",{style:h,children:Object(j.jsx)("a",{href:"mailto:#",children:Object(j.jsx)(p.a,{size:"40px"})})})]})]})}function x(e){var t="lake.png";""!==e.card.imageName&&(t=e.card.imageName);return Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"card mt-2",style:{minHeight:"550px"},children:[Object(j.jsx)("img",{className:"card-img-top",src:"/dev-portfolio"+"/images/".concat(t),alt:e.card.altText}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{class:"card-title",children:e.card.projTitle}),Object(j.jsx)("p",{className:"card-text",children:e.card.desc}),Object(j.jsxs)("p",{className:"card-text",children:[Object(j.jsx)("i",{children:"Technologies"}),": ",e.card.tech]})]}),Object(j.jsxs)("div",{className:"d-md-inline",children:[Object(j.jsx)("a",{href:e.card.gitHubRepo,className:"card-link",children:"Code"}),""!==e.card.deployLink?Object(j.jsx)("a",{href:e.card.deployLink,className:"card-link",children:"Page"}):null]})]})})}function u(){var e={marginLeft:"50px"};return Object(j.jsxs)("div",{className:"container-lg",children:[Object(j.jsx)("div",{className:"row row-cols-3",children:[{projTitle:"Quizzler",gitHubRepo:"https://github.com/minprocess/Quizzler",deployLink:"https://quizzler-2542.herokuapp.com/",imageName:"23-quizzler-screen-capture.png",desc:"Application to give a French language quiz. Used starter code.",tech:"apollo-server-express, graphql, express, bcrypt, dotenv, jsonwebtoken, express, mongoose, mongoose-random for the server. apollo/client, graphql, jwt-decode, react, react-dom, react-router-dom, react-scripts for the client.",altText:"Home page of Quizzler app"},{projTitle:"Workout Tracker",gitHubRepo:"https://github.com/minprocess/18-Workout-Tracker",deployLink:"https://workout-tracker-2542.herokuapp.com/",imageName:"18-Snapshot-homepage-workout-tracker.png",desc:"Workout Tracker is a full stack web app to view, create and track daily workouts. Used starter code.",tech:"Node, Express, Mongoose and JavaScript for the backend. HTML, CSS and Javascript for the frontend.",altText:"Home page of Workout Tracker app"},{projTitle:"Using a regex for validating a password string",gitHubRepo:"https://gist.github.com/minprocess/16c6bdaed839229df6c8d7125fb6277c",deployLink:"",imageName:"17-screenshot-using-a-regex-validating.png",desc:"A Gist explaining a regular expression that can be used to validate a password.",tech:"Gist on GitHub, Markdown",altText:"Gist article explaining a regex for validating a password string"},{projTitle:"Tech Blog",gitHubRepo:"https://github.com/minprocess/14-Tech-Blog",deployLink:"https://tech-blog-2542.herokuapp.com/",imageName:"14-homepage-tech-blog.png",desc:"A full stack website hosting a blog (The Tech Blog) allowing users to post articles and to post comments about articles.",tech:"Node, bcrypt, connect-session-sequelize, dotenv, eslint, express, express-handlebars, express-session, MySQL2, Sequelize.js",altText:"Home page of the Tech Blog app"},{projTitle:"E-commerce-backend",gitHubRepo:"https://github.com/minprocess/13-E-Commerce-Backend",deployLink:"https://ecomm-backend-2542.herokuapp.com/",imageName:"13-Insomnia_requests_for_backend_on_Heroku.png",desc:"Backend for an e-commerce website. Insomnia is used to test the CRUD actions. Used starter code",tech:"Node, Javascript, dotenv, express, MySQL2, Sequelize.js",altText:"Insomnia app showing transactions used with the backend"},{projTitle:"Employee Tracker",gitHubRepo:"https://github.com/minprocess/12-Employee-Tracker",deployLink:"",imageName:"12-Main_menu_of_Employee_Tracker.png",desc:"A command-line application that allows the user to interact with a MySQL database containing three tables of employee information.",tech:"Node, JavaScript, console.table, Inquirer.js, MySQL2",altText:"Snapshot of interface to a MySQL database made with Inquirer.js"}].map((function(e){return Object(j.jsx)(x,{card:e})}))}),Object(j.jsxs)("div",{className:"text-center",style:{marginTop:"150px"},children:[Object(j.jsx)("span",{children:Object(j.jsx)("a",{href:"https://github.com/minprocess",children:Object(j.jsx)(p.b,{size:"40px"})})}),Object(j.jsx)("span",{style:e,children:Object(j.jsx)("a",{href:"https://linkedin.com/in/bill-pate",children:Object(j.jsx)(p.c,{size:"40px"})})}),Object(j.jsx)("span",{style:e,children:Object(j.jsx)("a",{href:"mailto:#",children:Object(j.jsx)(p.a,{size:"40px"})})})]})]})}c(32);var g=c(14),O={marginLeft:"50px"},f={marginTop:"150px"};var v=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(r.a)(n,2),o=i[0],l=i[1],d=Object(a.useState)(""),h=Object(r.a)(d,2),b=h[0],m=h[1],x=Object(a.useState)(""),u=Object(r.a)(x,2),v=u[0],k=u[1],y=function(e){var t=e.target,c=t.name,a=t.value;"email"===c?s(a):"userName"===c?l(a):m(a)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container-lg",children:[Object(j.jsxs)("p",{children:["Hello ",o]}),Object(j.jsxs)("form",{className:"form",children:[Object(j.jsx)("input",{value:c,name:"email",onChange:y,type:"email",placeholder:"email"}),Object(j.jsx)("input",{value:o,name:"userName",onChange:y,type:"text",placeholder:"username"}),Object(j.jsx)("input",{value:b,name:"password",onChange:y,type:"password",placeholder:"Password"}),Object(j.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),Object(g.validateEmail)(c)&&o?Object(g.checkPassword)(b)?(alert("Hello ".concat(o)),l(""),m(""),s("")):k("Choose a more secure password for the account: ".concat(o)):k("Email or username is invalid")},children:"Submit"})]}),v&&Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"error-text",children:v})}),Object(j.jsxs)("div",{className:"text-center",style:f,children:[Object(j.jsx)("span",{children:Object(j.jsx)("a",{href:"https://github.com/minprocess",children:Object(j.jsx)(p.b,{size:"40px"})})}),Object(j.jsx)("span",{style:O,children:Object(j.jsx)("a",{href:"https://linkedin.com/in/bill-pate",children:Object(j.jsx)(p.c,{size:"40px"})})}),Object(j.jsx)("span",{style:O,children:Object(j.jsx)("a",{href:"mailto:#",children:Object(j.jsx)(p.a,{size:"40px"})})})]})]})})},k={marginLeft:"50px"},y={marginTop:"150px"};function N(){return Object(j.jsxs)("div",{className:"container-lg",children:[Object(j.jsx)("br",{}),Object(j.jsx)("h2",{children:"Resume"}),Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"https://drive.google.com/file/d/1xWtYvc8htPDIWsXh4eu4aJK50WeHWnA1/view?usp=sharing",children:Object(j.jsx)("h2",{children:"Download my resume"})}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{children:"Front-end Proficiencies"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"HTML"}),Object(j.jsx)("li",{children:"CSS"}),Object(j.jsx)("li",{children:"JavaScript"}),Object(j.jsx)("li",{children:"jQuery"}),Object(j.jsx)("li",{children:"Responsive design"}),Object(j.jsx)("li",{children:"React"}),Object(j.jsx)("li",{children:"Bootstrap"})]}),Object(j.jsx)("h2",{children:"Back-end Proficiencies"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"APIs"}),Object(j.jsx)("li",{children:"Node"}),Object(j.jsx)("li",{children:"Express"}),Object(j.jsx)("li",{children:"MySQL, Sequelize"}),Object(j.jsx)("li",{children:"MongoDB, Mongoos"}),Object(j.jsx)("li",{children:"REST"}),Object(j.jsx)("li",{children:"GraphQL"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"text-center",style:y,children:[Object(j.jsx)("span",{children:Object(j.jsx)("a",{href:"https://github.com/minprocess",children:Object(j.jsx)(p.b,{size:"40px"})})}),Object(j.jsx)("span",{style:k,children:Object(j.jsx)("a",{href:"https://linkedin.com/in/bill-pate",children:Object(j.jsx)(p.c,{size:"40px"})})}),Object(j.jsx)("span",{style:k,children:Object(j.jsx)("a",{href:"mailto:#",children:Object(j.jsx)(p.a,{size:"40px"})})})]})]})}function T(){var e=Object(a.useState)("Home"),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{currentPage:c,handlePageChange:function(e){return s(e)}}),"About"===c?Object(j.jsx)(m,{}):"Projects"===c?Object(j.jsx)(u,{}):"Contact"===c?Object(j.jsx)(v,{}):Object(j.jsx)(N,{})]})}var w=function(){return Object(j.jsx)(T,{})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),z()}},[[33,1,2]]]);
//# sourceMappingURL=main.7519eedc.chunk.js.map