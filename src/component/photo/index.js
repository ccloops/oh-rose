import './_photo.scss';
import React from 'react';
import tattoos from '../../assets/tattoos.jpg';
import bedPic from '../../assets/bed-pic.jpg';
import seven from '../../assets/seven.jpg';
import flowers from '../../assets/flowers.jpg';
import sunshineRoses from '../../assets/sunshine-roses.jpg';
class Photo extends React.Component {
  render() {
    return(
      <div className='photo'>
        
        <img src={tattoos} />
        <img src={bedPic}/>
        <img src={seven}/>
        <img src={flowers}/>
        <img src={sunshineRoses}/>
      </div>
    );
  }
}

export default Photo;