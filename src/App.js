import React from 'react';
import './App.css';
import './Button.js';
import SelectionArea from './SelectionArea.js';
import Timer from './Timer.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: []
    };
  }
  handleAddFast = length => {
    //Tell timer the correct length based on user input
    console.log(length);
    if (length < 0) {
      length = 0;
    } else if (length > 24) {
      length = 24;
    }
    this.state = length;
    console.log(length);
  }



  render() {
    return (
      <div>
        <SelectionArea handleAddFast={this.handleAddFast} />
        <Timer fastTime={16 * 60 * 60 - 61} />
      </div>
    );
  }
}

export default App;