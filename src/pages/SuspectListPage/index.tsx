import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const SuspectListPage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={4}>1 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
};

export default SuspectListPage;
