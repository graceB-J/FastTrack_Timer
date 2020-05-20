import React from "react";
import "./App.css";
import "./Button.js";
import SelectionArea from "./SelectionArea.js";
import Timer from "./Timer.js";
import History from "./History.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      history: [
        {
          startDate: new Date(),
          fastLength: 90 * 60,
        },
      ]
    };
  }

  handleAddFast = (length) => {
    //Tell timer the correct length based on user input
    if (length < 0) {
      length = 0;
    } else if (length > 24) {
      length = 24;
    }
    this.setState(prevState => {
      return ({
        length: length,
        history: prevState.history
      })
    })
    console.log(this.state.length);
  }

  handleFinished = (fastInfo) => {
    this.setState((prevState) => {
      return {
        history: prevState.history.concat(fastInfo),
      };
    });
  };

  render() {
    return (
      <div>
        <SelectionArea handleAddFast={this.handleAddFast} />
        <Timer
          handleFinished={this.handleFinished}
          totalFastTime={this.state.length * 3600}
        />
        <History history={this.state.history} />

      </div>
    );
  }
}

export default App;
