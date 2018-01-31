import React from "react";
import "./Thumbnail.css";

const Thumbnail = (props) => {
    // <pre>
    //   { JSON.stringify(props.matches.id, null, 2) }
    // </pre>
  return (
    <div className="thumbnail">

      <div className="img-container" key={props.matches._id}>
        <img alt={props.matches.name} src={props.matches.imgUrl} className="img-thumbnail" />
      </div>
      <p>Username: {props.matches.username}</p>
      <p>Email: {props.matches.email}</p>
      <p>ID (we won't have this in production): {props.matches._id}</p>
    </div>
  )
};

export default Thumbnail;