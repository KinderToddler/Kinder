import React from "react";
import "./ProfilePic.css";

const ProfilePic = (props) =>(
    <div className="img-container" id={ props.id }>
      <img alt={ props.name } src={ props.img } />
    </div>
    // <pre>
    //   { JSON.stringify(props.img, null, 2) }
    // </pre>
);

export default ProfilePic;