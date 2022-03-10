import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { ISuspect } from '../../utils/types';
import './style.css';

export interface IPropsCard {
  data?: ISuspect;
  cardColor?: string;
}
const SuspectCard: React.FC<IPropsCard> = ({ data, cardColor }) => {
  const keysToShow = ['name', 'id', 'age', 'balance', 'company', 'email'];
  const map = new Map(data && Object.entries(data));
  return (
    <Container className={'card'}>
      <Row
        className={'card-row'}
        style={{ backgroundColor: cardColor || 'none' }}
      >
        <Col md={3} sm={12} className={'card-img-container'}>
          <img
            src={data?.picture}
            className={'card-img'}
            alt={"Suspect's portrait"}
          />
        </Col>
        <Col md={8} sm={12} className={'card-stats'}>
          <ListGroup variant={'flush'}>
            {map &&
              keysToShow.map((key, index) => (
                <ListGroupItem key={'li' + index}>
                  <b>{key[0].toUpperCase() + key.substring(1)}</b>: {''}
                  <i>{map.get(key)}</i>
                </ListGroupItem>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SuspectCard;
