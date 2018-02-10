import React from "react";
import './Profile.css';
import ProfilePic from "../ProfilePic/ProfilePic";
import Name from "../Name/Name";
    // <pre>
    //   { JSON.stringify(props, null, 2) }
    // </pre>

const Profile = (props) =>(
  <div className="profile-container">
    <ProfilePic img={props.profile.imgUrl} />
    <div className="user-info-container">
        <div className="user-info">
            First Name: <Name name={props.profile.firstName} />
        </div>        
        <div className="user-info">
            Last Name: <Name name={props.profile.lastName} />
        </div>
        <div className="user-info">  
            Username: <Name name={props.profile.username} />
        </div>
        <div className="user-info">  
            Email: <Name name={props.profile.email} />
        </div>
        <div className="user-info">
            Height: <Name name={props.profile.height} />
         </div>
        <div className="user-info">
            Date of Birth: <Name name={props.profile.dob} />
        </div>
        <div className="user-info">   
            Likes: <Name name={props.profile.likes} />
        </div>
        <div className="user-info">   
            Dislikes: <Name name={props.profile.dislikes} />
        </div>
        <div className="user-info">  
            Allergies: <Name name={props.profile.allergies} />
        </div>
        <div className="user-info">  
            Zipcode: <Name name={props.profile.zipcode} />
        </div>
    </div>
  </div>  
);

export default Profile;

