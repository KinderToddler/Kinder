
import React, { Component } from 'react';
import API from "../../utils/API";
import { Input, FormBtn } from '../Form';
import "./EditTest.css"


class EditTest extends Component {

  constructor(props) {
     super(props)
  }

  state = {
    imgUrl: '',
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    height: '',
    age: '',
    likes: '',
    dislikes: '',
    allergies: '',
  }
  
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
    console.log(event)
    event.preventDefault()
    this.props.childOnSubmit(this.state)
  }

   // <pre className="test">
   //  { JSON.stringify(this.state, null, 2) }
   // </pre>

  render() {
    return (
    <div className="edit-profile, container">
        <div className="form-container, row">
            <form className="profile-form">
            image URL:
              <Input
                value={ this.state.imgUrl }
                onChange={ this.onEditChange }
                name='imgUrl'
                placeholder='image URL'
              />
              First Name: 
              <Input
                value={ this.state.firstName }
                onChange={ this.onEditChange }
                name='firstName'
                placeholder='name'
              />
              Last Name: 
              <Input
                value={ this.state.lastName }
                onChange={ this.onEditChange }
                name='lastName'
                placeholder='name'
              />
              User Name:
              <Input
                value={ this.state.username }
                onChange={ this.onEditChange }
                name='username'
                placeholder='username'
              />
              Email: 
              <Input
                value={ this.state.email }
                onChange={ this.onEditChange}
                name='email'
                placeholder='email address'
              />
              Height:
              <Input
                value={ this.state.height }
                onChange={ this.onEditChange }
                name='height'
                placeholder='height'
              />
              Age:
              <Input
                value={ this.state.age }
                onChange={ this.onEditChange }
                name='age'
                placeholder='age'
              />
              likes:
              <Input
                value={ this.state.likes }
                onChange={ this.onEditChange }
                name='likes'
                placeholder='likes'
              />
              Dislikes:
              <Input
                value={ this.state.dislikes }
                onChange={ this.onEditChange }
                name='dislikes'
                placeholder='dislikes'
              />
              Allergies:
              <Input
                value={ this.state.allergies }
                onChange={ this.onEditChange }
                name='allergies'
                placeholder='allergies'
              />
              <FormBtn
                onClick={ this.onButtonClick }
              >
              Done
              </FormBtn>
            </form>
        </div>
      </div>
    )
  }
}

export default EditTest
         
// <ErrorDisplay errors={ errors } dismiss={ this.dismissError } />
