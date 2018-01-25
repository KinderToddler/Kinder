import React, { Component } from "react";
import { Route } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import EditTest from "../components/EditTest/EditTest";
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
            .then(res => {
                return API.getUser(res.data.user._id)
            })
            .then(res => {
                this.setState(res.data)
            })
            .catch(() => {})

    }

    handleFormSubmit(profile) {
      this.setState(
          profile,

          () => {
              API.updateUser(this.state._id, this.state)
                  .then(res => { 
                      console.log("user updated ", res)
                  })
                  .catch(() => {
                      console.log("update User Failed!!!!!")
                  })
          }
      )
    }
    //   <pre>
    //    { JSON.stringify(this.state, null, 2) }
    // </pre>            
    render() {
        return ( 
          <div className="home-container">
            <Profile profile = { this.state }/> 
            <Route exact
              path = { this.props.match.url + '/edit' }
              render={ () => (
                <EditTest editProfile = { this.state } email = { this.state.email } childOnSubmit = {
                          (profile) => this.handleFormSubmit(profile) }
                />
              )}
            /> 
          </div>
        );
    }
}

export default Home;