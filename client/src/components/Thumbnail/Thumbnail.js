import React from "react";
import "./Thumbnail.css";

const Thumbnail = (props) => {
  // let st = {backgroundImage: 'url(' + props.matches.imgUrl + ')'};
    let imgstyle = {width: "50%"};
    let divstyle = {['text-align']: "center"}


  return (
  <div className="thumbnail">
    <pre>
      { JSON.stringify(props.matches.id, null, 2) }
    </pre>
    <div className="img-container" key={props.matches._id} style={divstyle}>
      <img alt={props.matches.name} src={props.matches.imgUrl} style= {imgstyle} className="img-thumbnail" />
    </div>
    <p>Username: {props.matches.username}</p>
    <p>Email: {props.matches.email}</p>
    <p>ID (we won't have this in production): {props.matches._id}</p>
  </div>
)
};

export default Thumbnail;