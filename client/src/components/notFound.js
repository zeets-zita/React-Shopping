import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';

import '../styles/notFound.css'


 class NotFound extends Component{
    render() {
      return (
        <Container>
        <div className='notfound-container'>
          <Row>
            <div className='notfound-header'>
            <h4>Uh whoops !</h4>
            <p>We can’t find the page
              <br/>
               you’re looking for.
            </p>
            <Link to='/'>
            <button className='notfound-btn'> GO BACK </button>
            </Link>
            </div>
            <img src={ require('../static/plantdesign.jpg')} alt='404' width='500px'></img>
           </Row>
        </div>
        </Container>
    )
  }
}

export default NotFound;