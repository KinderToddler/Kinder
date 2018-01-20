import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import EditTest from "../components/EditTest/EditTest";
import Edit from "./Edit";
import API from "../utils/API";
import "./Home.css";

class Home extends Component {

  constructor(props) {
    super(props)
    //console.log(props)
    this.state = {
      imgUrl: "",
      firstName: "",
      lastName: "",
      username: "",
      gender: "",
      age: "",      
      height: "",
      likes: "",
      dislikes: "",
      allergies: "",
      matches: "",
      email: "",
      _id: ""
    } 
  };
  // When the component mounts, load the profile information
  componentDidMount() {
    this.fetchProfile();
  }

  fetchProfile() {

    API.checkForSession()
    .then( res => {
       //const user = res.data.user
      return API.getUser(res.data.user._id)
    })
    .then( res=> {
        //const { name, value } = res.data
       //console.log(res.data)
        this.setState(res.data)
      })
    .catch(() => {})

  }
   

  handleFormSubmit = email => {
    console.log("submitted email on home:", email)
    this.setState({email}, () => {
    API.updateUser(this.state._id,  this.state)
      .then( res => {
        console.log(res)
      })
      .catch(() => {})})
  }

  // render() {
  // if (this.state.editing) return <EditProfile userProfile={this.state.userProfile} />
  // return <Profile/>
  
        // <pre>
        //    { JSON.stringify(this.props, null, 2) }
        // </pre>
        
  render() {
    return (
      <div>
        <Profile profile={ this.state } />
        <EditTest profile={ this.state } email={ this.state.email } childOnSubmit= {this.handleFormSubmit}/>
        <Route exact path={this.props.match.url + '/edit'} component={Edit} /> 
      </div>
    );
  }
}

export default Home;
