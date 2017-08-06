import React, { Component } from 'react'; // React { Component } cause we also wanna use components

class App extends Component {
  render() {
    return(
      <div>
        <div>Countdown to December 24, 2017</div>
        <div>
          <div>14 days</div>
          <div>30 hours</div>
          <div>15 minutes</div>
          <div>20 seconds</div>
        </div>
      </div>
    )
  }
}

export default App;