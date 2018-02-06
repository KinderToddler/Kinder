import React, { Component } from "react";
import "./Button.css";


export class Pass extends Component {

  constructor(props) {
    super(props);
    console.log("Pssssss props ", props)
    this.handleClick = this.handleClick.bind(this);
  }
    
  state ={}

  handleClick = () => {
    this.props.passClicked()
    console.log(this.props.passClicked)
  }

  render() {
    return <button className="pass" onClick={ this.handleClick }>Pass...</button>
  }
}
