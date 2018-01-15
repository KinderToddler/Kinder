import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";
import Name from "../Name/Name";
import Gender from "../Gender/Gender";
import Age from "../Age/Age";
import Likes from "../Likes/Likes";
import Dislikes from "../Dislikes/Dislikes";
import Text from "../Text/Text";


const Profile = (props) =>(
    // <pre>
    //   { JSON.stringify(props, null, 2) }
    // </pre>
  <div className="profile-container">    
    <ProfilePic img={props.profile.imageUrl} />
    <div className="user-name">
        Name: <Name name={props.profile.name} />
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

