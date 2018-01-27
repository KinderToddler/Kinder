import React, { Component } from "react";
import "./Button.css";

class Pass extends Component {

  constructor(props) {
    super(props);
    console.log("Pssssss props ", props)
    this.handleClick = this.handleClick.bind(this);
  }
    
  state ={}

  handleClick = () => {
    this.props.passClicked()
    // console.log(this.props)
  }
      //   <pre>
    //    { JSON.stringify(this.state, null, 2) }
    // </pre> 

  render() {
    const { foo } = this.state
    return <button className="pass" onClick={ this.handleClick }>Pass...</button>
  }
}

export default Pass; 