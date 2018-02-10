import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./Thumbnail.css";
import API from "../../utils/API";
import moment from 'moment';

class Thumbnail extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      recs: []
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    API.getYelpResults(this.props.matches.zipcode).then(res => {
      if (res.data.message) {
        this.setState({ show: true });
      } else {
        this.setState({ show: true, recs: res.data.businesses });
      }
    });
  }

  age() {
    if (this.props.matches.dob){
        return moment().diff(moment(this.props.matches.dob, 'DD-MM-YYYY'), 'months')
    } else{
       return "??"
    }
  }

  render() {
    if (!this.props.matches) {
      return <div>No Matches Yet! Add some matches :)</div>;
    }

    return (
      <div className="thumb-modal-container">
        <div className="img-container" key={this.props.matches._id}>
          <img
            alt={this.props.matches.name}
            src={this.props.matches.imgUrl}
            className="img-thumbnail"
          />
        </div>

        <Button className="view-user" bsSize="large" onClick={this.handleShow}>
          View User
        </Button>
        <button className="delete-match" id={this.props.matches._id} onClick={this.props.removeMatch}>
                remove this match
        </button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.matches.username}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="img-container" key={this.props.matches._id}>
              <img
                alt={this.props.matches.name}
                src={this.props.matches.imgUrl}
                className="img-thumbnail"
              />
            </div>

            <h4>Profile</h4>
            <p>Age: {this.age()} months</p>
            <p>Height: {this.props.matches.height}</p>
            <p>Likes: {this.props.matches.likes}</p>
            <p>Dislikes: {this.props.matches.dislikes}</p>
            <p>Allergies: {this.props.matches.allergies}</p>
            <hr />

            {this.state.recs.length > 0 ? (
              <div>
                Here are some places close to {this.props.matches.username} you
                could try out!
                {this.state.recs.map(business => {
                  return (
                    <ul>
                      <a href={business.url}>
                        {business.name} in {business.location.city}
                      </a>
                    </ul>
                  );
                })}
              </div>
            ) : (
              <div />
            )}

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

export default Thumbnail;
