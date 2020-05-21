import React from "react";

import Timer from "./Timer.js";
import History from "./History.js";
import FastSurvey from "./FastSurvey.js"

import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0.1 / 6 / 10 / 2,
      history: [],
      promptSurvey: false,
    };
  }


  handleAddFast = (length) => {
    if (length === 16) {
      this.setState((prevState) => {
        return {
          length: 16,
          history: prevState.history,
        };
      });
    } else if (length === 18) {
      this.setState((prevState) => {
        return {
          length: 18,
          history: prevState.history,
        };
      })
    } else {

      var minutes = parseInt(document.getElementById("minutes").value);
      var hours = parseInt(document.getElementById("hours").value);
      if (minutes !== minutes) {
        minutes = 0;
      }
      if (hours !== hours) {
        hours = 0;
      }
      if (length < 0) {
        minutes = 0;
      } else if (length > 24) {
        length = 24;
      }
      this.setState((prevState) => {
        return {
          length: parseInt(hours) + (parseInt(minutes) / 60.0),
          history: prevState.history,
        };
      });
    }
  };

  handleFinished = (fastInfo) => {
    this.setState((prevState) => {
      fastInfo.id = prevState.history.length
      return {
        history: prevState.history.concat(fastInfo),
        promptSurvey: true,
      };
    });
  };

  handleAddSurvey = ({ success, difficulty, additionalComments }) => {
    this.setState((prevState) => {
      let item = prevState.history.pop();
      item.success = success;
      item.difficulty = difficulty;
      item.additionalComments = additionalComments;
      prevState.history.push(item);
      return prevState;
    });
    this.setState({ promptSurvey: false })
  }

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" sticky="top">
          <Navbar.Brand>FastTrack</Navbar.Brand>
          <Button className="ml-auto" inline variant="outline-light">Account</Button>
        </Navbar>
        <Container fluid>
          <Row>
            <Col sm={5}>
              <Timer
                handleFinished={this.handleFinished}
                totalFastTime={this.state.length * 3600}
                handleAddFast={this.handleAddFast}
              />
              {!this.state.promptSurvey && <div><p className="InfoStyle">Intermittent fasting, also known as intermittent energy restriction,
              is an umbrella term for various meal timing schedules that cycle
              between voluntary fasting and non-fasting over a given period.
              Three methods of intermittent fasting are alternate-day fasting,
              periodic fasting, and daily time-restricted feeding.</p>
              <p className="InfoStyle">Learn more about fasting <a className="Link" href="https://tenor.com/wyxa.gif">here!</a> :)</p>
              <p>Please select your fasting to eating ratio or enter the number of hours and minutes you'd like to fast on the right.</p></div>}
              {this.state.promptSurvey && <FastSurvey FastSurvey handleAddSurvey={this.handleAddSurvey} />}
            </Col>
            <Col sm={7}>
              <History history={this.state.history} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;