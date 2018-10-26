import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupAddon, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { setToggle, setMovies } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NewEdit extends Component {
  constructor(props){
    super(props);

    this.state = {
      Title: (typeof props.selected !== "undefined") ? props.selected.Title : "",
      Year: (typeof props.selected !== "undefined") ? props.selected.Year : "",
      Runtime: (typeof props.selected !== "undefined") ? props.selected.Runtime : "",
      Genre: (typeof props.selected !== "undefined") ? props.selected.Genre : "",
      Director: (typeof props.selected !== "undefined") ? props.selected.Director : "",
      error: false,
      errorMessage: ""
    }

    this.submit = this.submit.bind(this);
    this.input = this.input.bind(this);
  }

  input = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submit = () => {
    let { list, action, active } = this.props;
    let { Title, Year, Runtime, Genre, Director } = this.state;
    let obj = this.state;

    let error = false;
    let errorMessage = [];
    let current_year = new Date().getFullYear();
    let reg = /^[0-9]+$/;

    for (var key in obj) {
      if (obj[key] === "" && key !== "errorMessage"){
        error = true;
      }
    }

    if(error) errorMessage.push("All fields are mandatory.");

    if((!reg.test(Year)) || parseInt(Year) > current_year || Year.length !== 4) {
      error = true;
      errorMessage.push("Invalid year.");
    } 

    
    list.map((res, index) => {   
      if(res.Title.toLowerCase() === Title.toLowerCase() && index !== active) {
        error = true;
        errorMessage.push("The same movie name is already exist.");
      }
      return true;
    })
    

    if(!error){
      let obj = { 
        imdbID: Math.random().toString(32).slice(2),
        Title: Title,
        Year: Year,
        Runtime: Runtime,
        Genre: Genre,
        Director: Director,
      };

      (action === "new") ? list.push(obj) : list[active] = obj;
      
      this.props.setMovies(list);

      this.close();
    }
    else {
      this.setState({ error: error, errorMessage: errorMessage });
    }
 
  }

  close = () => {
    this.setState({
      Title: "",
      Year: "",
      Runtime: "",
      Genre: "",
      Director: "",
      error: false,
      errorMessage: ""
    });

    this.props.setToggle();
  }

  render() {
    let { action } = this.props;
    let title = (action === "new") ? "Add New Movie" : "Edit Movie";
    let { error, errorMessage } = this.state;
    let msg = null;
    
    if(errorMessage.length > 0) msg = errorMessage.map((txt, index) => <p key={index}>{txt}</p> );

    return (
      <Modal isOpen={(action === "new" || action === "edit")} toggle={this.close}>
        <ModalHeader toggle={this.close}>{title}</ModalHeader>
        <ModalBody>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Title</InputGroupAddon>
            <Input name="Title" onChange={this.input} value={this.state.Title} />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Year</InputGroupAddon>
            <Input name="Year" onChange={this.input} value={this.state.Year} maxLength="4" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Runtime</InputGroupAddon>
            <Input name="Runtime" onChange={this.input} value={this.state.Runtime} />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Genre</InputGroupAddon>
            <Input name="Genre" onChange={this.input} value={this.state.Genre} />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Director</InputGroupAddon>
            <Input name="Director" onChange={this.input} value={this.state.Director} />
          </InputGroup>
          {
            (error) && <Alert color="danger text-center error">{ msg }</Alert>
          }
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={ this.submit }><FontAwesomeIcon icon="check" /> Save</Button>{' '}
          <Button color="danger" onClick={ this.close }><FontAwesomeIcon icon="times" /> Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default connect(null, { setToggle, setMovies })(NewEdit);