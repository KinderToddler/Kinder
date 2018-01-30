import React from "react";
import "./ProfilePic.css"

const ProfilePic = (props) =>(
    <div className="img-container" id={ props.id }>
      <img alt={ props.name } src={ props.img } />
    </div>
);

export default ProfilePic;