import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Match from './pages/Match';
import Wrapper from './components/Wrapper/Wrapper';
import Login from './pages/Login';
import Past from './pages/Past';
import API from "./utils/API";


class App extends Component {
  // state = {
  //   loggedIn: "",
  // }

  //   // When the component mounts, load the profile information
  // componentDidMount() {
  //   this.fetchProfile();
  // }

  // fetchProfile() {
    
  //   API.checkForSession()
  //   .then( res => {
  //     console.log(res.data)
      
  //     if(res.data){
  //       console.log("state", this.state)
  //       this.setSate({loggedIn: 1})
  //       console.log("state change")
  //     } 
  //   })
  //   .catch(() => {})

  // }

  // render() {
  // if (this.state.editing) return <EditProfile userProfile={this.state.userProfile} />
  // return <Profile/>

  render() {
    return (
      <Router>
        <div className="App">
        // <pre>
        //    { JSON.stringify(this.state, null, 2) }
        // </pre>
          <Nav />
          <Wrapper>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route exact path="/match" component={Match} />
            <Route exact path="/past" component={Past} />
          </Wrapper>
        </div>
      </Router>  
    );
  }
}

export default App;
