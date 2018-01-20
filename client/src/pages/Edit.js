
import React, { Component } from 'react'
import API from "../utils/API";
import { Redirect } from 'react-router-dom'
import { Input, FormBtn } from '../components/Form'

class Edit extends Component {

  state = {
      imgUrl: "",
      firstName: "Alyssa",
      age: 12,
      gender: "neutral",
      dislikes: "Pizza, ice cream",
      likes: "dogs, slides",
      allergies: "very allergic to peanuts. loves play time with water." 
    
  }

  componentDidMount() {
    API.checkForSession()
      .then( res => {
        const id = res.data.user._id
        return API.getUser(id)
      })
      .then( res => {
        const { imgUrl, firstName, gender, age, likes, dislikes, allergies } = res.data
        this.setState({ imgUrl, firstName, gender, age, likes, dislikes, allergies })

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
        const { imgUrl, firstName, gender, age, likes, dislikes, allergies } = this.state
        return API.updateUser(id, { imgUrl, firstName, gender, age, likes, dislikes, allergies })
      })
      .then( res => {
        console.log("updated")
      })
      .catch(() => {})
  }

  render() {
    const { imgUrl, firstName, gender, age, likes, dislikes, allergies} = this.state


    return (

      <div clasName="container" fluid>
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
                value={ allergies }
                onChange={ this.handleInputChange }
                name='allergies'
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
