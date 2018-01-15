import React, { Component } from "react";
import Friends from "./friends.json";
import Thumbnail from '../components/Thumbnail/Thumbnail';

    // <pre>
    //   { JSON.stringify(props, null, 2) }
    // </pre>

class Past extends Component {

  state = {
    Friend: Friends,
    id: '',
    image: ''
  };
                
    render() {
      return (
        <div className="past-matches">
            <h1>past matches</h1>
            { console.log(Friends) }
            { this.state.Friend.map(friend => {
              return <Thumbnail matches = { friend } />;
            }) }
        </div>
      );
    }
}


export default Past;  