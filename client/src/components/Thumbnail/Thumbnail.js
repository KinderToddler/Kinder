import React, { Component } from 'react';
import { Popover, Tooltip, Modal, Button, OverlayTrigger } from 'react-bootstrap'

class Examplemodal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);


    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    if (!this.props.matches) {
    	return (<div>No Matches Yet! Add some matches :)</div>)
    }

    return (

      <div>
       
	     <div className="img-container" key={this.props.matches._id}>
	        <img alt={this.props.matches.name} src={this.props.matches.imgUrl} className="img-thumbnail" />
	      </div> 

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          View User
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.matches.username}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <div className="img-container" key={this.props.matches._id}>
	        <img alt={this.props.matches.name} src={this.props.matches.imgUrl} className="img-thumbnail" />
	      </div> 

            <h4>Profile</h4>
            <p>
            Age: {this.props.matches.age}
            </p>
            <p>
            Height: {this.props.matches.height}
            </p>
            <p>
            Likes: {this.props.matches.likes}
            </p>
            <p>
            Dislikes: {this.props.matches.dislikes}
            </p>
            <p>
            Allergies: {this.props.matches.allergies}
            </p>            
            <hr />

            <p>Send this match a note!</p> 
            {this.props.children}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Examplemodal