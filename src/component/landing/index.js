import React from 'react';
// import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    let memberFunctions = Object.getOwnPropertyNames(Landing.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  render() {
    
    return (
      <h1>Oh, Rose</h1>
    );
  }
}

export default Landing;