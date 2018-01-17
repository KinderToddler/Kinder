import React from "react";
import './Name.css';
    // <pre>
    //   { JSON.stringify(props, null, 2) }
    // </pre>
const Name = (props) =>(
  <div className="name-container">
  {props.name}
  </div>  
);

export default Name;


