
import React, { Component } from 'react';
import API from "../../utils/API";
import { Redirect } from 'react-router-dom';
import { Input, FormBtn } from '../Form';
import Home from "../../pages/Home";


class EditTest extends Component {

  constructor(props) {
     super(props)
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const user = this.props.home.state

    console.log("this is this.props.profile._id " , this.props.profile._id)

    API.updateUser(this.props.profile._id,  user)
      .then( res => {
        console.log(res)
      })
      .catch(() => {})
  }



  render() {
    console.log("props are here ", this.props.home.state)
    const email  = this.props.home.state.email
    console.log(this.state)

    return (

      <div className="container" fluid>
     <pre>
      { JSON.stringify(this.props.home.state, null, 2) }
     </pre>
        <div className="row">
            <form>
              <Input
                value={ email }
                onChange={ this.props.parentOnChange }
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
