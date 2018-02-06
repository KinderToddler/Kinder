import React, { Component } from "react";
import "./Button.css";

class Button extends Component {

  constructor(props) {
    super(props);
  }
    
  state ={}

  render() {
    return <button className={this.props.value} onClick={ this.props.handleClick }>{this.props.text}</button>
  }
}

export default Button; 