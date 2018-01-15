import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Match from './pages/Match';
import Wrapper from './components/Wrapper/Wrapper';
import Login from './pages/Login';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Wrapper>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route exact path="/match" component={Match} />
          </Wrapper>
        </div>
      </Router>  
    );
  }
}

export default App;
