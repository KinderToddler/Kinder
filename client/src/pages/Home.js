import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import Edit from "./Edit";
import API from "../utils/API";
import "./Home.css";

class Home extends Component {

  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      firstName: "",
      lastName: "",
      matches: "",
      likes: "",
      dislikes: "",
      allergies: "",
      height: "",
      age: "",
      imgUrl: "",
      email: ""
    } 
  };
  // When the component mounts, load the profile information
  componentDidMount() {
    this.fetchProfile();
  }

  fetchProfile() {
    API.getUser("5a5ed88ae0496f0735bd2a1b")
      .then(user => {
        this.setState({
          firstName: user.data.firstName,
          lastName: user.data.lastName,
          matches: user.data.matches,
          likes: user.data.likes,
          dislikes: user.data.dislikes,
          allergies: user.data.allergies,
          height: user.data.height,
          age: user.data.age,
          imgUrl: user.data.imgUrl,
          email: user.data.lastName,
        })
      })
  }        
        // <pre>
        //    { JSON.stringify(this.props, null, 2) }
        // </pre>
  render() {
    return (
      <div>
        <Profile profile={ this.state } />
        <Route exact path={this.props.match.url + '/edit'} component={Edit} /> 
      </div>
    );
  }
}

export default Home;
