import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import ReactTransitionGroup from "react-addons-transition-group"; // ES6
import StackGrid from "react-stack-grid";
import investmentsJson from "./../../data/data.json";

const Portfolio = () => {
  const listItems = investmentsJson.map((item) => (
    <ListGroup.Item className="py-2" key={item.id}>
      <Row>
        <Col xs={6} className="d-flex align-items-center caption py-2">
          {item.dateTime}
        </Col>
        <Col
          xs={6}
          className="d-flex justify-content-end align-items-center caption py-2"
        >
          Mgr:&nbsp;
          {item.manager}
        </Col>
      </Row>
      <Row>
        <Col className="py-3">
          <h5>{item.name}</h5>
          <p>{item.description}</p>
        </Col>
      </Row>
    </ListGroup.Item>
  ));
  return (
    <ReactTransitionGroup component="StackGrid">
      <StackGrid columnWidth={250}>{listItems} </StackGrid>
    </ReactTransitionGroup>
  );
};

export default Portfolio;
