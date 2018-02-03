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
      // console.log(res.data, this.state.id)
      let result = res.data.filter(user => user._id != this.state.id)
      // console.log(result)
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

  passMatch = (bar) => {
    console.log('Click happened', bar);
    this.setState({activeIndex: this.state.activeIndex + 1}),()=>console.log(this.state.activeIndex)
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
         {this.state.newMatches.length <= this.state.activeIndex || this.state.newMatches.length === 0
         ? (<p>"no matches!"</p>)
          : (
            <div>
              <Card foo={"bar"} profile={this.state.newMatches[this.state.activeIndex]} yesClicked={this.createAMatch} passClicked={this.passMatch}/>
            </div>)
        }
      </div>
    )
  }
}

export default Match;

