
import React, { Component } from 'react';
import API from "../../utils/API";
import { Redirect } from 'react-router-dom';
import { Input, FormBtn } from '../Form';
import Home from "../../pages/Home";


class EditTest extends Component {

  constructor(props) {
     super(props)
  }

  state = {}

  componentDidMount() {
    this.setState({email: this.props.email})
  }

  onEditChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  } 

  onButtonClick = (event) => {
    event.preventDefault()
    this.props.childOnSubmit(this.state.email)
  }

  render() {
    return (

      <div className="container" fluid>
     <pre>
      { JSON.stringify(this.state.email, null, 2) }
     </pre>
        <div className="row">
            <form>
              <Input
                value={ this.state.email }
                onChange={ this.onEditChange}
                name='email'
                placeholder='email address'
              />
              <FormBtn
                onClick={ this.onButtonClick }
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
