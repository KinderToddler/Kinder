
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Input, FormBtn } from '../components/Form'
import './Login.css'
import API from "../utils/API";
import authState from '../utils/authinterface.js'


class Login extends Component {

  state = {
    username: '',
    password: '',
    newUser: false,
    loggedIn: false,
    errors: ''
  }

  componentDidMount() {
    API.checkForSession()
      .then( res => {
        const { user } = res.data
        if ( user ) {
          authState.loggedIn = true 
          this.setState({ loggedIn: true })
        }
      })
      .catch(() => {})
  }


  // componentDidMount() {
  //   if (authState.loggedIn === true){
  //     this.setState({loggedIn: true})
  //   }
  // }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()

    let user = {
      username: this.state.username,
      password: this.state.password
    }


    if ( !(user.username && user.password) ) return

    if (this.state.newUser){
      API.createUser(user)
      .then(function(user) {
        if (user.data.user._id) {
          authState.loggedIn = true
          this.setState({loggedIn: true})
        }
      }.bind(this))
      .catch(console.error)
    }
    else {
      API.loginUser(user)
      .then(function(res){
        // console.log(res)
        if (res.data.user._id) {
          authState.loggedIn = true
          this.setState({loggedIn: true})
        }
      }.bind(this))
      .catch(console.error)
    }

  }

  dismissError = idx => {
    const { errors } = this.state

    errors.splice(idx, 1)

    this.setState({ errors })
  }

  render() {
    const { loggedIn, newUser, username, password } = this.state

    if ( loggedIn ) {
      return (
        <Redirect to='/home' />
      )
    }

    return (
      <div id="login-container" className="container-fluid">
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

              <p className='switch-login'
                style={{ color: 'white', float: 'left', cursor: 'pointer'}}
                onClick={ () => this.setState({ newUser: !newUser }) }
              >
                {
                  newUser ? 'Already a user? Click here to Login' : 'Need an account? Click Here to Signup'
                }
              </p>
              <div className='about-Kinder'
                style={{ color: 'white', float: 'left', cursor: 'pointer'}}
              >
                {
                  newUser ? 'Kinder helps families to connect with other families and find play dates for their little ones. Once you signup, use "Edit" function to add your little one\'s information to complete your profile.' : ''
                }
              </div>
              <div className='usage-Kinder'
                style={{ color: 'white', float: 'left', cursor: 'pointer'}}
              >
                {
                  newUser ? '*This app is intended to be a family activity and not to be used as an idle time killer during commute.' : ''
                }
              </div>
            </form>
          </div>  
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  }
}

export default Login
         
// <ErrorDisplay errors={ errors } dismiss={ this.dismissError } />
