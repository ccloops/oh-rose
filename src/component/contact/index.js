import './_contact.scss';
import React from 'react';
class Contact extends React.Component {
  render() {
    return(
      
      <React.Fragment>
        <div className='contact'>

          <div id="email">
            <p>contact email: ohrosemusic@gmail.com</p>
          </div>

          <form type='submit' action=''>

            <input 
              type='text'
              id='fname'
              name='firstname'
              placeholder='Your first name...'
            />

            <input
              type='text'
              id='lname'
              name='lastname'
              placeholder='Your last name...'
            />

            <textarea 
              id='subject' 
              name='subject'
              placeholder='Write something...'>
            </textarea>

            <button type='submit'>Submit</button>          
        
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;