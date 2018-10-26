import React, { Component } from 'react';
import { Col, Card, CardHeader, CardText, CardBody, CardTitle, CardSubtitle, Button, CardFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { setToggle } from '../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Movie extends Component {
  render() {
    const { res, index, setToggle } = this.props;
    const title = res.Title.replace(/[^A-Za-z0-9 ]/g,"").toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');

    return (
      <Col className="col-12 col-md-6 col-lg-4">
        <Card className="m-3">
          <CardHeader><FontAwesomeIcon icon="film" />  Id: {index}</CardHeader>
          <CardBody>
            <CardTitle>Title: {title}</CardTitle>
            <CardSubtitle>Year: {res.Year}</CardSubtitle>
            <CardText>
              Runtime: {res.Runtime}<br />
              Genre: {res.Genre}<br />
              Director: {res.Director}
            </CardText>
          </CardBody>
          <CardFooter className="bg-transparent text-center">
            <Button color="success" onClick={()=>setToggle(index,"edit")}><FontAwesomeIcon icon="edit" /> Edit</Button>
            <Button color="danger" onClick={()=>setToggle(index,"delete")}><FontAwesomeIcon icon="trash" /> Delete</Button>
          </CardFooter>
        </Card>
      </Col>
    );
  }
}


export default connect(null, {setToggle})(Movie);

