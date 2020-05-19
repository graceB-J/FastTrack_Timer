import React from 'react';
import './App.css';
import './Button.js';
import SelectionArea from './SelectionArea.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: []
    };
  }
  handleAddFast = length => {
    //Tell timer the correct length based on user input
    this.state = length;
    console.log(length);
  }
  render() {
    return (
      <div>
        <SelectionArea handleAddFast={this.handleAddFast} />
      </div>
    );
  }
}



export default App;
