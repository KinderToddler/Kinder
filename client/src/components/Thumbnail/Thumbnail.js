import React from "react";
import "./Thumbnail.css";

const Thumbnail = (props) => (
  <div className="thumbnail">
    <pre>
      { JSON.stringify(props.matches.id, null, 2) }
    </pre>
    <div className="img-container" key={props.id}>
      <img alt={props.matches.name} src={props.matches.image} />
    </div>
    {props.matches.firstName}
    {props.matches.lastName}
  </div>
);

export default Thumbnail;