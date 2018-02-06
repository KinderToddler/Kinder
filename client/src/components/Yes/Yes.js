import React, { Component } from "react";
import "./Button.css";

class Yes extends Component {
  constructor(props) {
    super(props);
    // console.log("Yessss props ", props)
    this.handleClick = this.handleClick.bind(this);
  }

  state = {};

  handleClick = () => {
    this.props.yesClicked();
  };

  render() {
    return (
      <button className="yes" onClick={this.handleClick}>
        Yes!
      </button>
    );
  }
}

export default Yes;
