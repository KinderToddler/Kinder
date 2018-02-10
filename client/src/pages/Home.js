import React, { Component } from "react";
import { Route } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import Edit from "../components/Edit/Edit";
import API from "../utils/API";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "",
      firstName: "",
      lastName: "",
      username: "",
      gender: "",
      dob: "",
      height: "",
      likes: "",
      dislikes: "",
      allergies: "",
      matches: "",
      email: "",
      _id: ""
    };
  }

  // When the component mounts, load the profile information
  componentDidMount() {
    this.fetchProfile();
  }

  fetchProfile() {
    API.checkForSession()
      .then(res => {
        return API.getUser(res.data.user._id);
      })
      .then(res => {
        this.setState(res.data);
      })
      .catch(() => {});
  }

  handleFormSubmit(profile) {
    this.setState(
      profile,

      () => {
        API.updateUser(this.state._id, this.state)
          .then(res => {
            console.log("user updated ", res);
          })
          .catch(() => {
            console.log("update User Failed!!!!!");
          });
      }
    );
  }
  render() {
    return (
      <div className="home-container">
        <Profile profile={this.state} />
        <Route
          exact
          path={this.props.match.url + "/edit"}
          render={() => (
            <Edit
              editProfile={this.state}
              email={this.state.email}
              childOnSubmit={profile => this.handleFormSubmit(profile)}
            />
          )}
        />
      </div>
    );
  }
}

export default Home;
