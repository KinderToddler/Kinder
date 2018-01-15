import React from "react";
    // <pre>
    //   { JSON.stringify(props, null, 2) }
    // </pre>
const Likes = (props) =>(
  <div className="likes-container">
  {props.likes}
  </div>  
);

export default Likes;


