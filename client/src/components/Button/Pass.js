import React, { Component } from "react";
import "./Button.css";


export class Pass extends Component {
    // return <button className="pass" onClick={() => this.handleClick()}>Pass...</button>;
  // constructor(props) {
  //   super(props);
  //   console.log("Pssssss props ", props)
  //   console.log("Pssssss this ", this)

  //   }


  constructor(props) {
     super(props);
     this.handleClick = this.handleClick.bind(this);
  }
    
  state ={}

  // handleClick(){
  //   console.log("handleClick this", this.props)
  //   console.log("IAM CLICKED")

  // }

  handleClick = () => {
    console.log(this.props)
    // event.preventDefault()
    // this.props.clicked()
  }

  render() {
    return <button onClick={ this.handleClick }>Click Me</button>;
  }
}
