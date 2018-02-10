import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavHeader from './components/NavHeader/NavHeader';
import Home from './pages/Home';
import Match from './pages/Match';
import Wrapper from './components/Wrapper/Wrapper';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Past from './pages/Past';
import PrivateRoute from './utils/privateroute.js'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavHeader />
          <Wrapper>
            <div className='mobile-device'>It looks like you're on a mobile device. This app is intended to be used at comfort of your home with family memebrs. Please protect other users' privacy.</div>
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
