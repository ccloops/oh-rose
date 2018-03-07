import './_schedule.scss';
import React from 'react';
import spring from '../../assets/springtour2018.jpg';

class Schedule extends React.Component {
  render() {
    return (
      <div className='schedule'>
        <h2>Upcoming Shows</h2>
        <img src={spring} />
      </div>
    );
  }
}

export default Schedule;