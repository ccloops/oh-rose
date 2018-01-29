import './_landing.scss';
import React from 'react';
import tattoos from '../../assets/tattoos.jpg';

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <img src={tattoos} />
        <a target='blank' href='http://www.jamie-nadel.com/'><p>photo by: jamie nadel</p></a>
      </div>
    );
  }
}

export default Landing;