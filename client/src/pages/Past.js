import React, { Component } from "react";
// import Friends from "./friends.json";
import API from "../utils/API"
import {TextArea} from "../components/Form"
import Thumbnail from "../components/Thumbnail/Thumbnail";


class Past extends Component {

  state = {
    Friends: [],
    username: "",
    emailaddress: "",
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
        this.setState({Friends: res.data.matches, username: res.data.username, emailaddress: res.data.email})
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

    API.getUser(event.target.id)
      .then( res => {
        let newEmail = {...this.state}
        newEmail.email.to = [res.data.email, this.state.emailaddress]
        newEmail.email.html = "<h1>Your note from "+this.state.username+":</h1><p>"+this.state.emailBody+"</p><hr><h3>You're both cc'ed on this email so just reply :) - Kinder Admin</h3>"
        newEmail.email.subject = this.state.username + "sent you a note from Kinder!"
        this.setState({newEmail}, () => {
          API.sendEmail(this.state.email)
           .then(res => {
           this.setState({emailBody: ""})
            })
        })
      })



  }
                
    render() {
      let boundSendMail = this.sendMail.bind(this);
      let boundOnChange = this.handleInputChange.bind(this);
      return (
        <div className="past-matches">
            { this.state.Friends.map(friend => {

              return (
                <div className='thumbnail-container'>
                  <Thumbnail matches = {friend}>
                    <TextArea onChange = {boundOnChange} value={this.state.emailBody} name="emailBody"/>
                    <button className="sendEmail" onClick = {boundSendMail} id={friend._id}> email this match</button>
                  </Thumbnail>
                </div>
              )
            }) }
        </div>
      );
    }
}


export default Past;  