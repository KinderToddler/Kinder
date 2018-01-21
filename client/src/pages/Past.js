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
    API.checkForSession()
      .then( res => {
        const id = res.data.user._id
        return API.getUser(id)
      })
      .then( res => {
        // const { imgUrl, firstName, lastName, username, gender, age, height, likes, dislikes, allergies, email } = res.data
        // this.setState({ imgUrl, firstName, lastName, username, gender, age, height, likes, dislikes, allergies, email })
        this.setState({Friends: res.data.matches})
        console.log("heres state: ", this.state)
      })
      .catch(() => {})
      
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