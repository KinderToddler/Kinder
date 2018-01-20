
import React, { Component } from 'react'
import API from "../utils/API";
import { Redirect } from 'react-router-dom'
import { Input, FormBtn } from '../components/Form'


class Edit extends Component {

  state = {
      imgUrl: "",
      firstName: "",
      lastName: "",
      username: "",
      gender: "",
      age: "",   
      height: "",
      likes: "",      
      dislikes: "",
      allergies: "",
      email: "",
      _id: ""
  }

  componentDidMount() {
    API.checkForSession()
      .then( res => {
        const id = res.data.user._id
        return API.getUser(id)
      })
      .then( res => {
        // const { imgUrl, firstName, lastName, username, gender, age, height, likes, dislikes, allergies, email } = res.data
        // this.setState({ imgUrl, firstName, lastName, username, gender, age, height, likes, dislikes, allergies, email })
        this.setState(res.data)
      })
      .catch(() => {})
  }


  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()

    API.checkForSession()
      .then( res => {
        const id = res.data.user._id
        const { imgUrl, firstName, lastName, username, gender, age, height, likes, dislikes, allergies, email } = this.state
        return API.updateUser(id, { imgUrl, firstName, lastName, username, gender, age, height, likes, dislikes, allergies, email })
      })
      .then( res => {
        console.log("updated")
        
      })
      .catch(() => {})
  }

  render() {
    const { imgUrl, firstName, lastName, username, gender, age, height, likes, dislikes, allergies, email} = this.state


    return (

      <div className="container" fluid>
        
        <div className="row">
            <form>
              <Input
                value={ imgUrl }
                onChange={ this.handleInputChange }
                name='imgUrl'
                placeholder='image URL'
              />
              <Input
                value={ firstName }
                onChange={ this.handleInputChange }
                name='firstName'
                placeholder='name'
              />
              <Input
                value={ lastName }
                onChange={ this.handleInputChange }
                name='lastName'
                placeholder='name'
              />
              <Input
                value={ username }
                onChange={ this.handleInputChange }
                name='username'
                placeholder='username'
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
                value={ height }
                onChange={ this.handleInputChange }
                name='height'
                placeholder='height'
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
                value={ allergies }
                onChange={ this.handleInputChange }
                name='allergies'
                placeholder='allergies'
              />
              <Input
                value={ email }
                onChange={ this.handleInputChange }
                name='email'
                placeholder='email address'
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
