import './_app.scss';
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Landing from '../landing';
import Music from '../music';
import Schedule from '../schedule';
import Contact from '../contact';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <h1>Oh, Rose</h1>
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/music'>Music</Link></li>
                  <li><Link to='/schedule'>Schedule</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                </ul>
              </nav>
            </header>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/music' component={Music}/>
            <Route exact path='/schedule' component={Schedule}/>
            <Route exact path='/contact' component={Contact}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;