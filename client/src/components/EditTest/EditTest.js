
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
    this.fetchProfile();
    console.log(this.props)
  }

  fetchProfile() {

    API.checkForSession()
    .then( res => {
        const id = res.data.user._id
        return API.getUser(id)
    })
    .then( res=> {
        this.setState(res.data)
      })
    .catch(() => {})

  }

  onEditChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  } 

  onButtonClick = (event) => {
    event.preventDefault()
    this.props.childOnSubmit(this.state)
  }

  render() {
    return (

    <div className="container" fluid>
     <pre className="test">
      { JSON.stringify(this.state, null, 2) }
     </pre>
        <div className="row">
            <form>
              <Input
                value={ this.state.imgUrl }
                onChange={ this.onEditChange }
                name='imgUrl'
                placeholder='image URL'
              />
              <Input
                value={ this.state.firstName }
                onChange={ this.onEditChange }
                name='firstName'
                placeholder='name'
              />
              <Input
                value={ this.state.lastName }
                onChange={ this.onEditChange }
                name='lastName'
                placeholder='name'
              />
              <Input
                value={ this.state.username }
                onChange={ this.onEditChange }
                name='username'
                placeholder='username'
              />
              <Input
                value={ this.state.gender }
                onChange={ this.onEditChange }
                name='gender'
                placeholder='gender'
              />
              <Input
                value={ this.state.age }
                onChange={ this.onEditChange }
                name='age'
                placeholder='age'
              />
              <Input
                value={ this.state.height }
                onChange={ this.onEditChange }
                name='height'
                placeholder='height'
              />
              <Input
                value={ this.state.likes }
                onChange={ this.onEditChange }
                name='likes'
                placeholder='likes'
              />
              <Input
                value={ this.state.dislikes }
                onChange={ this.onEditChange }
                name='dislikes'
                placeholder='dislikes'
              />
              <Input
                value={ this.state.allergies }
                onChange={ this.onEditChange }
                name='allergies'
                placeholder='allergies'
              />
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
