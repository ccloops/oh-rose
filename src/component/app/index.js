import './_app.scss';
import {FaFacebookSquare, FaInstagram, FaTwitter, FaMusic} from 'react-icons/lib/fa';
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Landing from '../landing';
import Video from '../video';
import Schedule from '../schedule';
import Contact from '../contact';

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
                  <li><Link to='/schedule'>Schedule</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                </ul>
              </nav>
              <h1>Oh, Rose</h1>
            </header>
            <footer>
              <ul className='icons'>
                <li><a href='https://www.instagram.com/ohroseh/' target='blank'><FaInstagram/></a></li>
                <li><a href='https://www.facebook.com/ohrosemusic/' target='blank'><FaFacebookSquare/></a></li>
                <li><a href='https://twitter.com/ohrosemusic?lang=en' target='blank'><FaTwitter/></a></li>
                <li><a href='https://ohrose.bandcamp.com/' target='blank'><FaMusic/></a></li>
              </ul>
            </footer>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/video' component={Video}/>
            <Route exact path='/schedule' component={Schedule}/>
            <Route exact path='/contact' component={Contact}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;