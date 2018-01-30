import React, { Component } from "react";
// import Friends from "./friends.json";
import Thumbnail from '../components/Thumbnail/Thumbnail';
import API from "../utils/API"
import {TextArea} from "../components/Form"

class Past extends Component {

  state = {
    Friends: [],
    email: {
        from: '"Playmates 🍼" <kinderplaymates@gmail.com>', // sender address
        to: undefined, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Uhhh...Hello world?', // plain text body
        html: '<b>Sup prof?</b>' // html body
      },
    emailBody: undefined
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
        // console.log("heres state: ", this.state)
      })
      .catch(() => {})
      
  }

  handleInputChange(event) {
    const { name, value } = event.target
    this.setState({[name]: value})

  }

  sendMail(event) {
    var emailBody = this.state.email

    // console.log("friend ID", event.target.id )
    API.getUser(event.target.id)
      .then( res => {
        let newEmail = {...this.state}
        newEmail.email.to = res.data.email
        newEmail.email.html = this.state.emailBody
        this.setState({newEmail}, () => {
          API.sendEmail(this.state.email)
           .then(res => {
           return
            })
        })
      })


  }
                
    render() {
      let boundSendMail = this.sendMail.bind(this);
      let boundOnChange = this.handleInputChange.bind(this)
      return (
        <div className="past-matches">
            <h1>past matches</h1>
            { this.state.Friends.map(friend => {
              return (
                <div>
                  <Thumbnail matches = { friend } />
                  <TextArea onChange = {boundOnChange} name="emailBody"/>
                  <button onClick = {boundSendMail} id={friend._id}> email this match</button>
                </div>
                )
            }) }
        </div>
      );
    }
}


export default Past;  