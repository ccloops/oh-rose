import './_contact.scss';
import React from 'react';
class Contact extends React.Component {
  render() {
    return(
      <div className='contact'>
        <form type='submit'>

          <label>First Name</label>
          <input 
            type='text'
            id='fname'
            name='firstname'
            placeholder='Your first name...'
          />

          <label>Last Name</label>
          <input
            type='text'
            id='lname'
            name='lastname'
            placeholder='Your last name...'
          />

          <label>Subject</label>
          <textarea 
            id='subject' 
            name='subject'
            placeholder='Write something...'>
          </textarea>

          <button type='submit'>Submit</button>          
        
        </form>
      </div>
    );
  }
}

export default Contact;