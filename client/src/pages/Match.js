import React, { Component } from "react";
// import { Link, Route } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import Thumbnail from "../components/Thumbnail/Thumbnail";
import API from "../utils/API"

class Match extends Component {

  state = {
    Users: [],
  }


  // When the component mounts, load the profile information
  componentDidMount() {
    this.getAllUsers()
  }


  getAllUsers = () => {
    API.getAllUsers()
    .then(res => {
      console.log(res.data)
      // const userArray = res.data.map(profile => profile)
      // console.log("this is array", userArray)
      this.setState({Users: res.data})
      console.log("this is state", this.state)
    })
  }


  createAMatch = () => {
    let newMatch = {
      id: "5a652136f34a5b05c4fd9e25",
      match_id: "5a6520f9f34a5b05c4fd9e24"
    }
    API.createAMatch(newMatch)
      .then(res => {
        console.log(res.data)
      })
  }


  render() {

    return (
      <div className="find-match">
        <h1>Find A Playdate!</h1>
        { this.state.Users.map(profile => {
          return <Profile profile={ profile } 
          />
        }) }
          <div className="yesBtn">
            <button onClick={this.createAMatch}> Yes </button>
          </div>
      </div>
    )
  }
}

export default Match;

