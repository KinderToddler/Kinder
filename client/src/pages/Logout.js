import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import API from "../utils/API";
import "./Home.css";

class Logout extends Component {


  // When the component mounts, load the profile information
  componentDidMount() {
    this.logOut();
  }

  logOut() {

    API.logUserOut()
    .then( res => {
      console.log(res)
    window.location.href = res.data.redirectTo
    })

  }
   
        
  render() {
    return (
      <div>
        <p> You've been logged out. Cheers!
        </p>
      </div>
    );
  }
}

export default Logout;
