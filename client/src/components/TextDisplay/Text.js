import React from "react";
    // <pre>
    //   { JSON.stringify(props, null, 2) }
    // </pre>
const TextDisplay = (props) =>(
  <div className="text-container">
  {props.text}
  </div>  
);

export default TextDisplay;


