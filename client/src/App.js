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
import PrivateRoute from './utils/privateroute.js'
import API from "./utils/API";


class App extends Component {
      
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
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute exact path="/match" component={Match} />
            <PrivateRoute exact path="/past" component={Past} />
            <Route exact path="/logout" component={Logout} />
          </Wrapper>
        </div>
      </Router>  
    );
  }
}

export default App;
