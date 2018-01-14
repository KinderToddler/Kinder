import React, { Component } from "react";
import Profile from "../components/Profile/Profile";
import ProfilePic from "../components/ProfilePic/ProfilePic";


class Home extends Component {
  state = {
    imageUrl: "",
    name: "",
    age: 0,
    dislike: "",
    like: ""
  };

  // When the component mounts, load the profile information
  // componentDidMount() {
  //   this.profile();
  // }

  render() {
    return (
      <div>
        <Profile />
      </div>  
    );
  }
}

export default Home;

