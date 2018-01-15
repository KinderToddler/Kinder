import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import Edit from "./Edit";

class Home extends Component {

  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      imageUrl: "https://i.pinimg.com/736x/31/bf/2b/31bf2b60b9b6c6bb2836bbd392656546--toddler-girl-pictures-kid-pictures.jpg",
      name: "Alyssa",
      age: 12,
      gender: "neutral",
      dislikes: "Pizza, ice cream",
      likes: "dogs, slides",
      text: "very allergic to peanuts. loves play time with water." 
    } 
  };
  // When the component mounts, load the profile information
  // componentDidMount() {
  //   this.profile();
  // }        
        // <pre>
        //    { JSON.stringify(this.props, null, 2) }
        // </pre>
  render() {
    return (
      <div>
        <pre>
           { JSON.stringify(this.props.match.url, null, 2) }
        </pre>
        <Profile profile={ this.state } />
        <Route exact path={this.props.match.url + '/edit'} component={Edit} /> 
      </div>
    );
  }
}

export default Home;
