import React, { Component } from "react";
import Card from "../components/Card/Card";
import API from "../utils/API"
import Button from "../components/Button/Button"

class Match extends Component {


  state = {
    Users: [],
    Matches: [],
    newMatches: [],
    id: undefined,
    activeIndex: -1
  }


  // When the component mounts, load user id
  componentDidMount() {
    this.setID()
  }

  // When user ID is found, set this.id.
  // and call potential matches for the user. 

  setID = () => {
    API.checkForSession()
    .then( res => {
      this.setState({id: res.data.user._id})
      return API.getPotentialMatches(res.data.user._id)
    })
    .then(res => {
      let result = res.data.filter(user => user._id !== this.state.id)
      this.setState({newMatches: result, activeIndex: 0},
          () => console.log("got all users"))
    })
  }

  createAMatch = () => {
    let match = this.state.newMatches[this.state.activeIndex]
    let newMatch = {
      id: this.state.id,
      match_id: match._id
    }
    API.createAMatch(newMatch)
      .then(res => {
        this.setState({activeIndex: this.state.activeIndex + 1})
      })
  }

  passMatch = () => {
    this.setState({activeIndex: this.state.activeIndex + 1}),()=>console.log(this.state.activeIndex)
  }

  render() {
    return (
      <div className="find-match">
         {this.state.newMatches.length <= this.state.activeIndex || this.state.newMatches.length === 0
         ? (<p>"no matches!"</p>)
          : (
            <div>
              <Card profile={this.state.newMatches[this.state.activeIndex]}>
                <Button value="pass" text="Pass..." handleClick = {this.passMatch} />
                <Button value="yes" text="Yes!" handleClick = {this.createAMatch} />
              </Card> 
            </div>)
        }
      </div>
    )
  }
}

export default Match;

