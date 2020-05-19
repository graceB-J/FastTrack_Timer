import React from 'react';
import './App.css';
import './Button.js';
import SelectionArea from './SelectionArea.js';
import Timer from './Timer.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: []
    };
  }
  handleAddFast = length => {
    //Tell timer the correct length based on user input
    if (length < 0) {
      length = 0;
    } else if (length > 24) {
      length = 24;
    }
    this.state = length;
    console.log(length);
  }

  // handleFinished = fastInfo => {
  //   this.setState(prevState => {{
  //     history: prevState.concat(fastInfo)
  //   }})
  // }

  render() {
    return (
      <div>
        <SelectionArea handleAddFast={this.handleAddFast} />
        <Timer totalFastTime={16 * 60 * 60} />
      </div>
    );
  }
}

export default App;