import React from "react";

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

import "./History.css"

const History = (props) => {
  const { history } = props;

  let averageFastTime = Math.round(
    (history.filter(entry => entry.success === "Yes").reduce((prev, current) => {
      return prev + current.fastLength;
    }, 0) / 3600) / history.filter(entry => entry.success === "Yes").length * 1000
  ) / 1000

  return (
    <div className="historyRoot">
      <Row className="historyStatRoot">
        <Col sm={4}>
          <Card className="statCard">
            <Card.Body>
              <Card.Title>Completed Fasts</Card.Title>
              <Card.Text className="statBody">
                {history.filter(entry => entry.success === "Yes").length}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="statCard">
            <Card.Body>
              <Card.Title>Total Hours Fasted</Card.Title>
              <Card.Text className="statBody">
                {Math.round(
                  (history.filter(entry => entry.success === "Yes").reduce((prev, current) => {
                    return prev + current.fastLength;
                  }, 0) / 3600) * 1000
                ) / 1000}<span className="units"> hrs</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="statCard">
            <Card.Body>
              <Card.Title>Average Fast Time</Card.Title>
              <Card.Text className="statBody">
                {isNaN(averageFastTime) ? (0) : averageFastTime}<span className="units"> hrs</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h1>History</h1>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Success?</th>
              <th>Start Date</th>
              <th>Fast Duration</th>
              <th>Difficulty</th>
              <th>Additional Comments</th>
            </tr>
          </thead>
          <tbody>
            {history.slice(0).reverse().map((entry) => {
              return (
                <tr>
                  <td>{entry.id + 1}</td>
                  <td>{entry.success}</td>
                  <td>
                    {entry.startDate.getFullYear() +
                      "-" +
                      (entry.startDate.getMonth() + 1) +
                      "-" +
                      entry.startDate.getDate() +
                      " " +
                      entry.startDate.getHours() +
                      ":" +
                      entry.startDate.getMinutes() +
                      ":" +
                      entry.startDate.getSeconds()}
                  </td>
                  <td>
                    {Math.floor(entry.fastLength / 3600)}:{(entry.fastLength / 60) % 60}
                  </td>
                  <td>
                    {entry.difficulty}
                  </td>
                  <td>
                    {entry.additionalComments}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default History;