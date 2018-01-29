import React from 'react';
import tattoos from '../../assets/tattoos.jpg';

// import {Link} from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <img src={tattoos} />
      
      </div>
    );
  }
}

export default Landing;