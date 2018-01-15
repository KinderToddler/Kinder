import React, { Component } from "react";
import Profile from "../components/Profile/Profile";

class Match extends Component {
  state = {
    Profile
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  findMatch = id => {

  };

  render() {
    return (
      <div>
        <Profile profile={ this.state } />
      </div>
    );
  };

};
export default Match;