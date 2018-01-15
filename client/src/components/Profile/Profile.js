import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";

const Profile = (props) =>(
    // <pre>
    //   { JSON.stringify(props, null, 2) }
    // </pre>
  <div className="profile-container">    

    <ProfilePic img={props.profile.imageUrl}/>
  </div>  
);

export default Profile;

