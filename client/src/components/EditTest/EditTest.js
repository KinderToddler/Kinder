
import React, { Component } from 'react';
import API from "../../utils/API";
import { Redirect } from 'react-router-dom';
import { Input, FormBtn } from '../Form';

class EditTest extends Component {

  constructor(props) {
    super(props)
  };


  handleInputChange = event => {
    const {name, value} = event.target
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const {name, value} = event.target
    const user = {name, value}
    API.updateUser(this.props.profile._id,  user)
      .then( res => {
        console.log(res)
      })
      .catch(() => {})
  }

  render() {
      const { email } = this.props.profile.email

    return (

      <div clasName="container" fluid>
        <pre>
           { JSON.stringify(this.props, null, 2) }
        </pre>
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
    )
  }
}

export default EditTest
         
// <ErrorDisplay errors={ errors } dismiss={ this.dismissError } />
