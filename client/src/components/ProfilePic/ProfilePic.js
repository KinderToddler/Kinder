import React from "react";
import "./ProfilePic.css";

const ProfilePic = (props) =>(
    <div className="img-container">
      <img src={ props.img } />
    </div>
    // <pre>
    //   { JSON.stringify(props.img, null, 2) }
    // </pre>
);

export default ProfilePic;