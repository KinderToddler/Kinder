import React from "react";

const Allergies = (props) =>(
  <div className="allergies-container">
  {props.allergies}
  {props.username}
  </div>  
);

export default Allergies;


