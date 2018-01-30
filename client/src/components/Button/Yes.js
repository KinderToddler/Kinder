import React, { Component } from "react";
import "./Button.css";


export class Yes extends Component {

  constructor(props) {
    super(props);
    console.log("Pssssss props ", props)
    this.handleClick = this.handleClick.bind(this);
  }
    
  state ={}

  handleClick = () => {
    this.props.passClicked()
    console.log(this.props.yesClicked)
  }

  render() {
    return <button className="yes" onClick={ this.handleClick }>Yes!</button>
  }
}
