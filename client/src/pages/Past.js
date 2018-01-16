import React, { Component } from "react";
// import Friends from "./friends.json";
import Thumbnail from '../components/Thumbnail/Thumbnail';
import API from "../utils/API"
    // <pre>
    //   { JSON.stringify(props, null, 2) }
    // </pre>

class Past extends Component {

  state = {
    Friends: [] ,
  };

  componentDidMount() {
    this.fetchMatches();
  }

  fetchMatches() {
    API.getUser("5a5d6ca179fe869a42e7fe5d")
      .then(user => {
        // console.log(user)
        const friendsArray = user.data.matches.map(match => match)
        console.log("friendsArray", friendsArray)
        this.setState({Friends: friendsArray})
          })
      
  }   
                
    render() {
      return (
        <div className="past-matches">
            <h1>past matches</h1>
            { this.state.Friends.map(friend => {
              return <Thumbnail matches = { friend } />;
            }) }
        </div>
      );
    }
}


export default Past;  