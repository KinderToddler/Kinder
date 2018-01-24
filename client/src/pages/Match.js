import React, { Component } from "react";
// import { Link, Route } from "react-router-dom";
import Card from "../components/Card/Card";
import API from "../utils/API"

class Match extends Component {

  state = {
    Users: [],
    id: undefined
  }


  // When the component mounts, load the profile information
  componentDidMount() {
    this.getAllUsers()
    this.getID()
  }


  getAllUsers = () => {
    API.getAllUsers()
    .then(res => {
      this.setState({Users: res.data})
    })
  }

  getID = () => {
    API.checkForSession()
    .then( res => {
      this.setState({id: res.data.user._id})
    })
  }


  createAMatch = (event) => {
    let newMatch = {
      id: this.state.id,
      match_id: event.target.id
    }
    API.createAMatch(newMatch)
      .then(res => {
      })
  }
  
  render() {

    return (
      <div className="find-match">
        <h1 className="text-center">Find A Playdate!</h1>
        { this.state.Users.map(profile => {
          return (
            <div>
              <Card profile={ profile } /> 
              <div className="yesBtn">
                <button onClick={this.createAMatch} id= {profile._id}> Yes </button>
              </div>
            </div>
            )
        }) }

      </div>
    )
  }
}

export default Match;

