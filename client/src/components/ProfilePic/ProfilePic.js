import React from "react";
import "./ProfilePic.css";

const ProfilePic = (props) =>(
    <div className="img-container" key={props.id}>
      <img alt={props.name} src='https://i.pinimg.com/736x/31/bf/2b/31bf2b60b9b6c6bb2836bbd392656546--toddler-girl-pictures-kid-pictures.jpg' />
    </div>
);

export default ProfilePic;

