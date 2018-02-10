import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";
import Name from "../Name/Name";
import "./Card.css";
import moment from "moment";

function age(dob) {
    if (dob){
        return moment().diff(moment(dob, 'DD-MM-YYYY'), 'months')
    } else{
       return "??"
    }
}

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
            Age: <Name name={age(props.profile.dob)} /> months
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
    <div>
        {props.children}
    </div>   
  </div>  
);

export default Card;

