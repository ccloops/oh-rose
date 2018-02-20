import './_app.scss';
import {FaFacebookSquare, FaInstagram, FaTwitter, FaMusic, FaSpotify} from 'react-icons/lib/fa';
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Landing from '../landing';
import Photo from '../photo';
import Video from '../video';
import Schedule from '../schedule';
import Contact from '../contact';
import tattoos from '../../assets/tattoos.jpg';
// import flowerBackground from '../../assets/flower-background.JPG';
import flowers from '../../assets/flowers.jpg';
import sunshineRoses from '../../assets/sunshine-roses.jpg';
import bedPic from '../../assets/bed-pic.jpg';


class App extends React.Component {
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
                <div className='triangle1'>
                  <img src={sunshineRoses}/>
                </div>
                <div className = 'triangle2'>
                  <img src={flowers}/>
                </div>
                <div className = 'triangle3'>
                  <img src={bedPic}/>
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