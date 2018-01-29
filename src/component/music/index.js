import './_music.scss';
import React from 'react';
class Music extends React.Component {
  render() {
    return(
      <div className='music'>
        <h2>Music Videos</h2>
        <main>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ZSOvhRtS1nA" frameBorder="0" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SiK1Qet6_1g" frameBorder="0" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/MLyc1kY0dak" frameBorder="0" allowFullScreen></iframe>
        </main>
      </div>
    );
  }
}

export default Music;