import React from "react";

import "./Button.js";
import SelectionArea from "./SelectionArea.js";
import Timer from "./Timer.js";
import History from "./History.js";
import FastSurvey from "./FastSurvey.js"

import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 1,
      history: [
        {
          id: 0,
          startDate: new Date(),
          fastLength: 90 * 60,
          success: "Yes",
          difficulty: "Too Easy",
          additionalComments: "i want to eat food"
        },
        {
          id: 1,
          startDate: new Date(),
          fastLength: 3 * 60,
          success: "No",
          difficulty: "Too Easy",
          additionalComments: "Why do I do this?"
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
  };

  handleFinished = (fastInfo) => {
    this.setState((prevState) => {
      fastInfo.id = prevState.history.length
      return {
        history: prevState.history.concat(fastInfo),
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
  }

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" sticky="top">
          <Navbar.Brand href="#home">FastTrack</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button inline variant="outline-light">Search</Button>
        </Navbar>
        <Container fluid>
          <Row>
            <Col sm={5}>
              <SelectionArea handleAddFast={this.handleAddFast} />
              <Timer
                handleFinished={this.handleFinished}
                totalFastTime={this.state.length * 3600}
              />
              <FastSurvey FastSurvey handleAddSurvey={this.handleAddSurvey} />
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
