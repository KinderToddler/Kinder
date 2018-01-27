import React, { Component } from "react";
// import Friends from "./friends.json";
import Thumbnail from '../components/Thumbnail/Thumbnail';
import API from "../utils/API"
// import emailer from "../utils/emailer.js"
    // <pre>
    //   { JSON.stringify(props, null, 2) }
    // </pre>

class Past extends Component {

  state = {
    Friends: [],
    email: {
        from: '"Playmates 🍼" <kinderplaymates@gmail.com>', // sender address
        to: 'eneidarevueltas@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Uhhh...Hello world?', // plain text body
        html: '<b>Uhhh...Hello world?</b>' // html body
      }
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

  sendMail() {
    var emailBody = this.state.email

    API.sendEmail(emailBody)
      .then(res => {
        console.log(res)
      })

  }
                
    render() {
      let boundSendMail = this.sendMail.bind(this);
      return (
        <div className="past-matches">
            <h1>past matches</h1>
            { this.state.Friends.map(friend => {
              return (
                <div>
                  <Thumbnail matches = { friend } />
                  <button onClick = {boundSendMail}> email this match </button>
                </div>
                )
            }) }
        </div>
      );
    }
}


export default Past;  