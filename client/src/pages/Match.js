import React, { Component } from "react";
import Card from "../components/Card/Card";
import API from "../utils/API"
import { Yes, Pass } from '../components/Button'

class Match extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    Users: [],
    id: undefined,
    activeIndex: -1
  }


  // When the component mounts, load the profile information
  componentDidMount() {
    this.getAllUsers()
    this.getID()
    
  }


  getAllUsers = () => {
    API.getAllUsers()
    .then(res => {
      this.setState({Users: res.data, activeIndex: 0},
        () => console.log("STATE: ", this.state))
    })
  }

  getID = () => {
    API.checkForSession()
    .then( res => {
      this.setState({id: res.data.user._id})
    })
  }


  createAMatch = (event) => {
    let newMatch = {
      id: this.state.id,
      match_id: event.target.id
    }
    API.createAMatch(newMatch)
      .then(res => {
        this.setState({activeIndex: this.state.activeIndex + 1})
      })
  }

  passMatch = (bar) => {
    console.log('Click happened', bar);
    // this.setState({activeIndex: this.state.activeIndex + 1})
  }

  render() {
    console.log("rendering")
    console.log("users:", this.state.Users)
    console.log("activeIndex:", this.state.activeIndex)
    return (
      <div className="find-match">
         {this.state.Users.length === 0
         ? (<p>"no matches!"</p>)
          : (
            <div>
              <Card profile={this.state.Users[this.state.activeIndex]} />
              <Yes />
              <Pass clicked={this.passMatch}/>
            </div>)
        }
      </div>
    )
  }
}

export default Match;

