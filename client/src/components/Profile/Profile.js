import React from "react";
import { Link, Route } from "react-router-dom";
import ProfilePic from "../ProfilePic/ProfilePic";
import Name from "../Name/Name";
import Gender from "../Gender/Gender";
import Age from "../Age/Age";
import Likes from "../Likes/Likes";
import Dislikes from "../Dislikes/Dislikes";
import Text from "../Text/Text";


const Profile = (props) =>(

  <div className="profile-container">    
        <pre>
      { JSON.stringify(props, null, 2) }
    </pre>
    <ProfilePic img={props.profile.imageUrl} />
    <div className="user-name">
        Name: <Name name={props.profile.favoriteColor} />
    </div>
    <div className="user-gender">
        Gender: <Gender gender={props.profile.gender} />
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
    <div className="user-description">  
        Short description: <Text text={props.profile.text} />
    </div>
  </div>  
);

export default Profile;

