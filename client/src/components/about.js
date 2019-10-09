import React, { Component } from 'react';
import '../styles/about.css'


 class About extends Component{
    render() {
      return (
        <div className='about-container'>
          <div className='about-header'>
              <h3>About us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel felis sit amet arcu faucibus fringilla. 
                  Donec rhoncus lobortis leo, ut tincidunt enim dictum non. Sed dignissim odio non dolor pulvinar, eget fermentum enim efficitur. 
                  Pellentesque imperdiet consectetur dolor sollicitudin elementum. Phasellus tortor massa, laoreet quis pellentesque vel, lacinia et ante. 
                <br/>
                <br/>
                  Ut viverra ornare egestas. Ut facilisis justo sit amet faucibus venenatis. 
                  Vestibulum a sem porta, commodo urna a, vehicula mi. Vivamus sed justo sed augue tincidunt iaculis. 
                  Nullam at pharetra leo, sollicitudin faucibus est. </p>
            <div className='about-img'>
                <img src={ require('../static/windowplants.jpg') } alt='logo' ></img>
            </div>
          </div>
        </div>
    )
  }
}

export default About;