import React from "react";
// import { Route } from "react-router-dom";
import ProfilePic from "../ProfilePic/ProfilePic";
import Name from "../Name/Name";
// import Yes from "../Button"
// import Pass from "..Button"
import "./Card.css"

    // <pre>
    //   { JSON.stringify(props, null, 2) }
    // </pre>

const Card = (props) =>(
  <div className="card-container">
    <ProfilePic img={props.profile.imgUrl} />
    <div className="user-info-container">
        <div className="user-info">
            First Name: <Name name={props.profile.firstName} />
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
            Age: <Name name={props.profile.age} />
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
    </div>
  </div>  
);

export default Card;

