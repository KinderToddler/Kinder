import React, { Component } from "react";
import Thumbnail from "../components/Thumbnail/Thumbnail";
import API from "../utils/API"

class Match extends Component {
  
  state = {
    Potentials: [] ,
  };

  componentDidMount() {
    this.findMatches();
  };

  findMatches() {
    API.getUser()
      .then(user => {
        const potentialsArray = user.data.matches.map(match => match)
        this.setState({Friends: potentialsArray})
      })
  }

  render() {
    return (
      <div>
       <h1>Find a New Friend!</h1>
       { this.state.Potentials.map(potential => {
        return <Thumbnail matches = { potential } />;
       })}
      </div>
    );
  };

};
export default Match;