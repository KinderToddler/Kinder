
import React, { Component } from 'react'
// import API from '../../utils/API'
// import AuthInterface from '../../utils/AuthInterface'
import { Redirect } from 'react-router-dom'
import { Input, FormBtn } from '../components/Form'
// import ErrorDisplay from '../../components/ErrorDisplay'

class Edit extends Component {

  state = {
      imageUrl: "",
      name: "Alyssa",
      age: 12,
      gender: "neutral",
      dislikes: "Pizza, ice cream",
      likes: "dogs, slides",
      text: "very allergic to peanuts. loves play time with water." 
    
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

    const { imageUrl, name, gender, age, likes, dislikes, text } = this.state

  }

  dismissError = idx => {
    const { errors } = this.state

    errors.splice(idx, 1)

    this.setState({ errors })
  }

  render() {
    const { imageUrl, name, gender, age, likes, dislikes, text} = this.state


    return (
      <div clasName="container" fluid>
        <div className="row">
            <form>
              <Input
                value={ imageUrl }
                onChange={ this.handleInputChange }
                name='imageUrl'
                placeholder='image URL'
              />
              <Input
                value={ name }
                onChange={ this.handleInputChange }
                name='name'
                placeholder='name'
              />
              <Input
                value={ gender }
                onChange={ this.handleInputChange }
                name='gender'
                placeholder='gender'
              />
              <Input
                value={ age }
                onChange={ this.handleInputChange }
                name='age'
                placeholder='age'
              />
              <Input
                value={ likes }
                onChange={ this.handleInputChange }
                name='likes'
                placeholder='likes'
              />
              <Input
                value={ dislikes }
                onChange={ this.handleInputChange }
                name='dislikes'
                placeholder='dislikes'
              />
              <Input
                value={ text }
                onChange={ this.handleInputChange }
                name='text'
                placeholder='text'
              />
              <FormBtn
                onClick={ this.handleFormSubmit }
              >
              </FormBtn>
            </form>

        </div>

      </div>
    )
  }
}

export default Edit
         
// <ErrorDisplay errors={ errors } dismiss={ this.dismissError } />
