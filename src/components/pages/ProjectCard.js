import React from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons'
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

  const cardStyle = {
    minHeight: '550px',
  }

  //<img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
  //src={process.env.PUBLIC_URL + `/images/${imgName}`}
  //src={require(`/images/${imgName}`)}
  return(
      <div className="col">
        <div className="card mt-2" style={cardStyle} >
          <img className="card-img-top" src={process.env.PUBLIC_URL + `/images/${imgName}`} alt={props.card.altText}/>
          <div className="card-body">
            <h4 class="card-title">{props.card.projTitle}</h4>
            <p className="card-text">{props.card.desc}</p>
            <p className="card-text"><i>Technologies</i>: {props.card.tech}</p>
          </div>
          <div className="d-md-inline">
          <a href={props.card.gitHubRepo} className="card-link">Code</a>
          {props.card.deployLink !== "" ? <a href={props.card.deployLink} className="card-link">Page</a> : null }
          </div>
        </div>
      </div>
  );
}
