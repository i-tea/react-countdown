import React, { Component } from 'react'; // React { Component } cause we also wanna use components
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  //JSX make different keyword to make classname, cause class is reserved, have to use className
  // <button onClick={()=> this.changeDeadline()}>Submit</button>  anonymous function, cause it's called just once, not loop
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 24, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
    //this.setState({deadline: 'November 24, 2017'})
    console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline});
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
        <Form inline={true}>
          <FormControl
            className="Deadline-input"
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={()=> this.changeDeadline()}>Submit</Button> 
        </Form>
      </div>
    )
  }
}

export default App;