import './_app.scss';
import {FaFacebookSquare, FaInstagram, FaTwitter, FaMusic, FaSpotify} from 'react-icons/lib/fa';
import React from 'react';
import Modal from '../modal';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Landing from '../landing';
import Photo from '../photo';
import Video from '../video';
import Schedule from '../schedule';
import Contact from '../contact';
import tattoos from '../../assets/tattoos.jpg';
import flowers from '../../assets/flowers.jpg';
import sunshineRoses from '../../assets/sunshine-roses.jpg';
import bedPic from '../../assets/bed-pic.jpg';
import dressingRoom from '../../assets/dressingroom.jpg';
import animated from '../../assets/animated.jpg';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneClicked: false,
      twoClicked: false,
      threeClicked: false,
      fourClicked: false,
      fiveClicked: false,
      
    };

    this.toggleImageOne = this.toggleImageOne.bind(this);
    this.toggleImageTwo = this.toggleImageTwo.bind(this);
    this.toggleImageThree = this.toggleImageThree.bind(this);
    this.toggleImageFour = this.toggleImageFour.bind(this);
    this.toggleImageFive = this.toggleImageFive.bind(this);
    this.toggleImageSix = this.toggleImageSix.bind(this);
  }

  toggleImageOne() {
    let currentState = this.state.oneClicked;
    this.setState({oneClicked: !currentState});
  }

  toggleImageTwo() {
    let currentState = this.state.twoClicked;
    this.setState({twoClicked: !currentState});
  }

  toggleImageThree() {
    let currentState = this.state.threeClicked;
    this.setState({threeClicked: !currentState});
  }

  toggleImageFour() {
    let currentState = this.state.fourClicked;
    this.setState({fourClicked: !currentState});
  }

  toggleImageFive() {
    let currentState = this.state.fiveClicked;
    this.setState({fiveClicked: !currentState});
  }

  toggleImageSix() {
    let currentState = this.state.sixClicked;
    this.setState({sixClicked: !currentState});
  }
  

  render() {

 
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/video'>Videos</Link></li>
                  <li><Link to='/photo'>Photos</Link></li>
                  <li><Link to='/schedule'>Schedule</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                </ul>
              </nav>
              <h1>Oh, Rose</h1>
            </header>
            <main>
              <div>
                <div 
                  className={this.state.oneClicked ? 'expandImage' : 'rectangle1'}
                  onClick={this.toggleImageOne}>
                  <img src={sunshineRoses}/>
                </div>
                <div  
                  className={this.state.twoClicked ? 'expandImage' : 'rectangle2'}
                  onClick={this.toggleImageTwo}>
                  <img src={flowers}/>
                </div>
                <div  
                  className={this.state.threeClicked ? 'expandImage' : 'rectangle3'}
                  onClick={this.toggleImageThree}>
                  <img src={bedPic}/>
                </div>
                <div  
                  className={this.state.fourClicked ? 'expandImage' : 'rectangle4'}
                  onClick={this.toggleImageFour}>
                  <img src={tattoos}/>
                </div>
                <div  
                  className={this.state.fiveClicked ? 'expandImage' : 'rectangle5'}
                  onClick={this.toggleImageFive}>
                  <img src={dressingRoom}/>
                </div>
                <div  
                  className={this.state.sixClicked ? 'expandImage' : 'rectangle6'}
                  onClick={this.toggleImageSix}>
                  <img src={animated}/>
                </div>
              </div>
            </main>
            <footer>
              <ul className='icons'>
                <li><a href='https://www.facebook.com/ohrosemusic/' target='blank'><FaFacebookSquare/></a></li>
                <li><a href='https://ohrose.bandcamp.com/' target='blank'><FaMusic/></a></li>
                <li><a href='https://open.spotify.com/artist/3k7ErvhO8cmFVOTrAVtuKe' target='blank'><FaSpotify/></a></li>
                <li><a href='https://www.instagram.com/ohroseh/' target='blank'><FaInstagram/></a></li>
                <li><a href='https://twitter.com/ohrosemusic?lang=en' target='blank'><FaTwitter/></a></li>
              </ul>
            </footer>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/video' component={Video}/>
            <Route exact path='/photo' component={Photo}/>
            <Route exact path='/schedule' component={Schedule}/>
            <Route exact path='/contact' component={Contact}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;