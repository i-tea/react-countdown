import React, { Component } from 'react'; // React { Component } cause we also wanna use components
import './App.css';

class App extends Component {
  //JSX make different keyword to make classname, cause class is reserved, have to use className
  render() {
    return(
      <div className="App">
        <div className="App-title">Countdown to December 24, 2017</div>
        <div>
          <div className="Clock-days">14 days</div>
          <div className="Clock-hours">30 hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">20 seconds</div>
        </div>
        <div>
          <input placeholder='new date' />
          <button>Submit</button> 
        </div>
      </div>
    )
  }
}

export default App;