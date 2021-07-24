import React from 'react';

export default function ProjectCard (props) {
  return(
    <div>
      <p>props.projTitle</p>
    </div>
  );
}
/*
export default function ProjectCard (props) {

  let imgName = "lake.png";   // In case an image is not available for a project this one is used.
  if (props.imageName !== "") {
    imgName = props.imageName;
  }

  const imgStyle = {
    width: '250px',
  }
  return(
    <div>
      <div className="col s12 l4">
        <div className="card" style={imgStyle}>
          <img className="card-img-top" src={`/images/${imgName}`} alt={props.altText}/>
          <div className="card-body">
            <h4 class="card-title">{props.projTitle}</h4>
            <p className="card-text">{props.desc}</p>
            <p className="card-text"><i>Technologies</i>: {props.tech}</p>
          </div>
          <a href={props.githubRepo} className="card-link">Code</a>
          {props.deployLink !== "" ? <a href={props.deployLink} className="card-link">Page</a> : null }
        </div>
      </div>
    </div>
  );
}

*/