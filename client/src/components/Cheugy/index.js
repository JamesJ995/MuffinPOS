import React from 'react';
import Konami from 'react-konami-code';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog'
import Button from 'react-bootstrap/Modal';
import { useState} from 'react';

export default class Cheugy extends React.Component {

  

  theBottom = () => {
    
    <Video handleShow="true" />
    alert('Hey, you found it!');
  }

  render = () => (
    <Konami action={this.theBottom}>
     
      {"Hey, Look at me!"}
    </Konami>
  )
}


class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        show: true
    };
    
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }
  handleClose (){
    this.setState({ show: false });
  };

  handleShow (){
    this.setState({ show: true });
    alert(this.handleShow);
  };

  render() {
    return(
        <div>
            <Button variant="primary" onClick={this.handleShow}>Launch modal</Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>My Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                    <Button variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
  }
}