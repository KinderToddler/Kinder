import React from "react";
// import { Route } from "react-router-dom";
import './Profile.css';
import ProfilePic from "../ProfilePic/ProfilePic";
import Name from "../Name/Name";
import Height from "../Height/Height";
import Age from "../Age/Age";
import Text from "../Text/Text";

    //  <pre>
    //   { JSON.stringify(props, null, 2) }
    // </pre>

const Profile = (props) =>(
  <div className="profile-container">
       <pre>
      { JSON.stringify(props, null, 2) }
    </pre>
    <ProfilePic img={props.profile.imgUrl} />
    <div className="user-info">
        <div className="user-name">
            First Name: <Name name={props.profile.firstName} />
            Last Name: <Name name={props.profile.lastName} />
        </div>
        <div className="user-name">  
            Username: <Name name={props.profile.username} />
        </div>
        <div className="user-email">  
            Email: <Name name={props.profile.email} />
        </div>
        <div className="user-height">
            Height: <Height height={props.profile.height} />
         </div>
        <div className="user-age">
            Age: <Age age={props.profile.age} />
        </div>
        <div className="user-likes">   
            Likes: <Text text={props.profile.likes} />
        </div>
        <div className="user-dislikes">   
            Dislikes: <Text text={props.profile.dislikes} />
        </div>
        <div className="user-allergies">  
            Allergies: <Text text={props.profile.username} />
        </div>
    </div>
  </div>  
);

export default Profile;

