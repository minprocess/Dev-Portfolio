import React from 'react';
/*
export default function ProjectCard (props) {
  return(
    <div>
      <p>{props.card.projTitle}</p>
    </div>
  );
}
*/

export default function ProjectCard (props) {

  let imgName = "lake.png";   // In case an image is not available for a project this one is used.
  if (props.card.imageName !== "") {
    imgName = props.card.imageName;
  }

  const imgStyle = {
    width: '250px',
  }
  return(
    <div>
      <div className="col s12 l4">
        <div className="card" style={imgStyle}>
          <img className="card-img-top" src={`/images/${imgName}`} alt={props.card.altText}/>
          <div className="card-body">
            <h4 class="card-title">{props.card.projTitle}</h4>
            <p className="card-text">{props.card.desc}</p>
            <p className="card-text"><i>Technologies</i>: {props.card.tech}</p>
          </div>
          <a href={props.card.githubRepo} className="card-link">Code</a>
          {props.card.deployLink !== "" ? <a href={props.card.deployLink} className="card-link">Page</a> : null }
        </div>
      </div>
    </div>
  );
}
