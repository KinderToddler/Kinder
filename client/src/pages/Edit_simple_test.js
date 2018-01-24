import React, { Component } from 'react'
import API from "../utils/API";
import { Redirect } from 'react-router-dom'
import { Input, FormBtn } from '../components/Form'



  componentDidMount() {
    API.checkForSession()
      .then( res => {
        const id = res.data.user._id
        return API.getUser(id)
      })
      .then( res => {
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

  const Edit = (props) => (

      <div className="container-fluid">
        
        <div className="row">
            <form>
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
  );


export default Edit
         
// <ErrorDisplay errors={ errors } dismiss={ this.dismissError } />
