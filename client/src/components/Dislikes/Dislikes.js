import React from "react";
    // <pre>
    //   { JSON.stringify(props, null, 2) }
    // </pre>
const Dislikes = (props) =>(
  <div className="dislikes-container">
  {props.dislikes}
  </div>  
);

export default Dislikes;


