import React, { Component } from "react";
// import { Link, Route } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import Thumbnail from "../components/Thumbnail/Thumbnail";
import API from "../utils/API"

class Match extends Component {

  state = {
    users: []
  }


  // When the component mounts, load the profile information
  componentDidMount() {
    API.checkForSession()
      .then( res => {
        const id = res.data.user._id
        return API.getUser(id)
      })
      .then( res => {
        this.setState(res.data)
      })
      .catch(() => {})
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }



  render() {

    return (
      <div>
     <Profile profile={this.state} />
 
      </div>
    )
  }
}

export default Match;


