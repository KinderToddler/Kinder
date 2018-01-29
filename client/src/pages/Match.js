import React, { Component } from "react";
import Card from "../components/Card/Card";
import API from "../utils/API"
import Pass from "../components/Pass/Pass"
import Yes from "../components/Yes/Yes"

class Match extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    Users: [],
    Matches: [],
    newMatches: [],
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
      this.pastMatches(res.data.user._id)
    })
  }


  pastMatches = (id) => {
    console.log("filterMatches")
    API.getUser(id)
      .then(res => {
        this.filterMatches(res.data.matches)
      })
      .catch((err)=>{console.log(err)})
  }

  filterMatches = (matches) => {
    // create an array with ids of past right swipes 
    const matchIds = []
    for (let i = 0; i < matches.length; i++) {
      matchIds.push(matches[i]._id)
    }
    // console.log(matchIds)
    // console.log(this.state.Users)
    const result = this.state.Users.filter(user => !matchIds.includes(user._id));
    console.log("unMatchedUsers ", result)
    this.setState.newMatches = result;
  }

  createAMatch = () => {
    let match = this.state.Users[this.state.activeIndex]
    let newMatch = {
      id: this.state.id,
      match_id: match._id
    }
    API.createAMatch(newMatch)
      .then(res => {
        this.setState({activeIndex: this.state.activeIndex + 1})
      })
  }

  passMatch = (bar) => {
    console.log('Click happened', bar);
    this.setState({activeIndex: this.state.activeIndex + 1})
  }
                // <pre>
                // { JSON.stringify(Object.keys(this), null, 2) }
                // </pre>              
  render() {
    console.log("rendering")
    console.log("users:", this.state.newMatches)
    console.log("activeIndex:", this.state.activeIndex)
    return (
      <div className="find-match">
         {this.state.Users.length === 0
         ? (<p>"no matches!"</p>)
          : (
            <div>
              <Card foo={"bar"} profile={this.state.Users[this.state.activeIndex]} yesClicked={this.createAMatch} passClicked={this.passMatch}/>
            </div>)
        }
      </div>
    )
  }
}

export default Match;

