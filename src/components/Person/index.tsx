import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { ISuspect } from '../../utils/types';
import './style.css';

export interface IPropsCard {
  data?: ISuspect;
}
const SuspectCard: React.FC<IPropsCard> = ({ data }) => {
  return (
    <Container className={'card'}>
      <Row>
        <Col md={3} sm={12} className={'card-img-container'}>
          <img
            src={data?.picture}
            className={'card-img'}
            alt={"Suspect's portrait"}
          />
        </Col>
        <Col md={9} sm={12} className={'card-stats'}>
          <ListGroup variant={'flush'}>
            <ListGroupItem>
              <b>Name</b>: <i>{data?.name}</i>
            </ListGroupItem>
            <ListGroupItem>
              <b>ID</b>: <i>{data?.id}</i>
            </ListGroupItem>
            <ListGroupItem>
              <b>Age</b>: <i>{data?.age}</i>
            </ListGroupItem>
            <ListGroupItem>
              <b>Balance</b>: <i>{data?.balance}</i>
            </ListGroupItem>
            <ListGroupItem>
              <b>Company</b>: <i>{data?.company}</i>
            </ListGroupItem>
            <ListGroupItem>
              <b>Email</b>: <i>{data?.email}</i>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SuspectCard;
