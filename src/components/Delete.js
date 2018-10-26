import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { setMovies, setToggle } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Delete extends Component {
  delete = () => {
    let { active, list } = this.props;
    list.splice(active, 1);
    this.props.setMovies(list);
    this.props.setToggle();
  }

  render() {
    let { active, action, setToggle } = this.props;
    
    return (
      <Modal isOpen={(active !== null && action === "delete")} toggle={setToggle}>
        <ModalHeader toggle={setToggle}>Delete Movie</ModalHeader>
        <ModalBody>
          Are you sure that you want to delete this movie ?
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={ this.delete.bind(this) }><FontAwesomeIcon icon="check" /> Ok</Button>{' '}
          <Button color="danger" onClick={ setToggle }><FontAwesomeIcon icon="times" /> Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}


export default connect(null, { setMovies, setToggle })(Delete);