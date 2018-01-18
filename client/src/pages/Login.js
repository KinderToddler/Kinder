
import React, { Component } from 'react'
// import AuthInterface from '../../utils/AuthInterface'
import { Redirect } from 'react-router-dom'
import { Input, FormBtn } from '../components/Form'
// import ErrorDisplay from '../../components/ErrorDisplay'
import './Login.css'
import API from "../utils/API";


class Login extends Component {

  state = {
    username: '',
    password: '',
    newUser: false,
    loggedIn: false
  }

  // componentDidMount() {
  //   API.checkForSession()
  //     .then( res => {
  //       const { user } = res.data

  //       if ( user ) {
  //         AuthInterface.login( user )
  //         this.setState({ loggedIn: true })
  //       }
  //     })
  //     .catch(() => {})
  // }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()

    // const { username, password, newUser } = this.state
    let user = {
      username: this.state.username,
      password: this.state.password
    }

    // if ( !(username && password) ) return

    // const authMethod = newUser ? 'signup' : 'login'

    if (this.state.newUser){
      API.createUser(user)
      .then(function(user) {
        console.log(user)
      })
      .catch(console.error)
    }
    else {
      API.loginUser(user)
      .then(function(user){
        console.log(user)
      })
      .catch(console.error)
    }


    // API[ authMethod ]({ username, password })
    //   .then( res => {
    //     const { errors, user } = res.data

    //     if ( errors ) {
    //       return this.setState({ errors })
    //     }

    //     AuthInterface.login( user )
    //     this.setState({ loggedIn: true })

    //   })
    //   .catch(console.error)
  }

  dismissError = idx => {
    const { errors } = this.state

    errors.splice(idx, 1)

    this.setState({ errors })
  }

  render() {
    const { loggedIn, newUser, errors, username, password } = this.state

    if ( loggedIn ) {
      return (
        <Redirect to='/' />
      )
    }

    return (
      <div id="login-container" clasName="container" fluid>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="header">
              {
                newUser ? 'Signup' : 'Login'
              }
            </div>

            <form>

              <Input
                value={ username }
                onChange={ this.handleInputChange }
                name='username'
                placeholder='Username (required)'
              />

              <Input
                value={ password }
                onChange={ this.handleInputChange }
                name='password'
                type='password'
                placeholder='Password (required)'
              />

              <FormBtn
                disabled={ !(username && password) }
                onClick={ this.handleFormSubmit }
              >
                {
                  newUser ? 'Signup' : 'Login'
                }
              </FormBtn>

              <p
                style={{ color: 'blue', float: 'left', textDecoration: 'underline', cursor: 'pointer' }}
                onClick={ () => this.setState({ newUser: !newUser }) }
              >
                {
                  newUser ? 'Already a user? Login instead' : 'Need an account? Signup instead'
                }
              </p>

            </form>
          </div>  
          <div clasName="col-md-3"></div>
        </div>
      </div>
    )
  }
}

export default Login
         
// <ErrorDisplay errors={ errors } dismiss={ this.dismissError } />
