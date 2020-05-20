import React from "react";
import "./App.css";
import "./Button.js";
import SelectionArea from "./SelectionArea.js";
import Timer from "./Timer.js";
import History from "./History.js";
import FastSurvey from "./FastSurvey.js"


import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 1,
      history: [
        {
          startDate: new Date(),
          fastLength: 90 * 60,
        },
        {
          startDate: new Date(),
          fastLength: 3 * 60,
        },
      ],
    };
  }

  handleAddFast = (length) => {
    //Tell timer the correct length based on user input
    if (length < 0) {
      length = 0;
    } else if (length > 24) {
      length = 24;
    }
    this.setState((prevState) => {
      return {
        length: length,
        history: prevState.history,
      };
    });
    console.log(this.state.length);
  };

  handleFinished = (fastInfo) => {
    this.setState((prevState) => {
      return {
        history: prevState.history.concat(fastInfo),
      };
    });
  };

  handleAddSurvey = ({ success, difficulty, AdditionalComments }) => {
    this.setState((prevState) => {
      let item = prevState.history.pop();
      item.success = success;
      item.difficulty = difficulty;
      item.AdditionalComments = AdditionalComments;
      prevState.history.push(item);
      return prevState;
    });
  }


  render() {
    return (
      <div>
        <FastSurvey FastSurvey handleAddSurvey={this.handleAddSurvey} />
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
