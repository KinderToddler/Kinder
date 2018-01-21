import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Match from './pages/Match';
import Wrapper from './components/Wrapper/Wrapper';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Past from './pages/Past';
import API from "./utils/API";


class App extends Component {
  state = {loggedIn: ''}

    // When the component mounts, load the profile information
  componentDidMount() {
    this.fetchProfile();
  }

  fetchProfile() {
    API.checkForSession()
    .then( res => {
      console.log(res.data.user)
      if(res.data.user){
        console.log(this.state)
        this.setState({loggedIn: true})
      } 
    })
    .catch(() => {})

  }
// render() {
//   // if (this.state.editing) 
//     return ( 
//     <Router>
//     <div>
//     <pre>
//            { JSON.stringify(this.state, null, 2) }
//     </pre>
//     </div>
//   </Router>)

// }        
// <pre>
        //    { JSON.stringify(this.state, null, 2) }
        // </pre>
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Wrapper>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route exact path="/match" component={Match} />
            <Route exact path="/past" component={Past} />
            <Route exact path="/logout" component={Logout} />
          </Wrapper>
        </div>
      </Router>  
    );
  }
}

export default App;
