import React from 'react';

export default function ProjectCard ({card, idx}) {



  let imgName = "lake.png";   // In case an image is not available for a project this one is used.
  if (card.imageName !== "") {
    imgName = card.imageName;
  }

  const cardStyle = {
    minHeight: '550px',
  }

  return(
      <div className="col">
        <div className="card mt-2" style={cardStyle} >
          <img className="card-img-top" src={process.env.PUBLIC_URL + `/images/${imgName}`} alt={card.altText}/>
          <div className="card-body">
            <h4 className="card-title">{card.projTitle}</h4>
            <p className="card-text">{card.desc}</p>
            <p className="card-text"><i>Technologies</i>: {card.tech}</p>
          </div>
          <div className="d-md-inline">
          <a href={card.gitHubRepo} className="card-link">Code</a>
          {card.deployLink !== "" ? <a href={card.deployLink} className="card-link">Page</a> : null }
          </div>
        </div>
      </div>
  );
}
