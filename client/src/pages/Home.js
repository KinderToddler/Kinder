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
      return API.getUser(res.data.user._id)
    })
    .then( res=> {
        this.setState(res.data)
      })
    .catch(() => {})

  }
   
  handleFormSubmit = (profile) => {
    console.log("handleFormSubnit ", profile)
    const { name, value } = profile
    this.setState({[name]: value})
    console.log("handleFormSubnit- setState ", this.state)
    API.updateUser(this.state._id, this.state)
      .then( res => {
        console.log(res)
      })
      .catch(() => {})
  }
      
      //   <pre>
      //    { JSON.stringify(this.state, null, 2) }
      // </pre>
  render() {
    return (
      <div>
      <Profile profile={ this.state } />
      <EditTest editProfile={ this.state } email={ this.state.email } childOnSubmit={this.handleFormSubmit}/>
      <Route exact path={this.props.match.url + '/edit'} component={Edit} />
      </div>
    );
  }
}

export default Home;
