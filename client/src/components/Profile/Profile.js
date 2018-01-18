import React from "react";
import { Link, Route } from "react-router-dom";
import './Profile.css';
import ProfilePic from "../ProfilePic/ProfilePic";
import Name from "../Name/Name";
import Height from "../Height/Height";
import Age from "../Age/Age";
import Likes from "../Likes/Likes";
import Dislikes from "../Dislikes/Dislikes";
import Allergies from "../Allergies/Allergies";

    // <pre>
    //   { JSON.stringify(props, null, 2) }
    // </pre>
const Profile = (props) =>(
  <div className="profile-container">
    <ProfilePic img={props.profile.imgUrl} />
    <div className="user-info">
        <div className="user-name">
            Name: <Name name={props.profile.firstName} />
        </div>
        <div className="user-height">
            Height: <Height height={props.profile.height} />
         </div>
        <div className="user-age">
            Age: <Age age={props.profile.age} />
        </div>
        <div className="user-likes">   
            Likes: <Likes likes={props.profile.likes} />
        </div>
        <div className="user-dislikes">   
            Dislikes: <Dislikes dislikes={props.profile.dislikes} />
        </div>
        <div className="user-allergies">  
            Allergies: <Allergies allargies={props.profile.allergies} />
        </div>
        <div className="user-name">  
            Username: <Allergies username={props.profile.username} />
        </div>
    </div>
  </div>  
);

export default Profile;

