import React from "react";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

import "./History.css"

const History = (props) => {
  const { history } = props;

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Card className="statCard">
              <Card.Body>
                <Card.Title>Completed Fasts</Card.Title>
                <Card.Text className="statBody">
                  {history.length}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="statCard">
              <Card.Body>
                <Card.Title>Total Hours Fasted</Card.Title>
                <Card.Text className="statBody">
                  {Math.round(
                    (history.reduce((prev, current) => {
                      return prev + current.fastLength;
                    }, 0) / 3600) * 100
                  ) / 100}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="statCard">
              <Card.Body>
                <Card.Title>Average Fast Time</Card.Title>
                <Card.Text className="statBody">
                  {Math.round(
                    (history.reduce((prev, current) => {
                      return prev + current.fastLength;
                    }, 0) / 3600) / history.length * 100) / 100}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
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
            {history.map((entry) => {
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