import React, { Component } from "react";
import Profile from "../components/Profile/Profile";

class Home extends Component {
  state = {

    imageUrl: "https://i.pinimg.com/736x/31/bf/2b/31bf2b60b9b6c6bb2836bbd392656546--toddler-girl-pictures-kid-pictures.jpg",
    name: "Alyssa",
    age: 12,
    gender: "neutral",
    dislikes: "Pizza, ice cream",
    likes: "dogs, slides",
    text: "very allergic to peanuts. loves play time with water." 
  };

  // When the component mounts, load the profile information
  // componentDidMount() {
  //   this.profile();
  // }

  render() {
    return (
      <div>
        <Profile profile={ this.state } />
      </div>
    );
  }
}

export default Home;
