import React from 'react';

import { ISuspect } from '../../utils/types';
import { NavigateFunction } from 'react-router-dom';
import { ITheme } from '../../App';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap';
import useStyles from './useStyles';

export interface IPropsCard {
  data?: ISuspect;
  cardColor?: string;
  cardStatsBgColor?: string;
  navigate?: NavigateFunction;
  maxHeight?: string;
  theme?: ITheme;
  imageHeight?: string;
  imageWidth?: string;
}

const PersonCard: React.FC<IPropsCard> = (props) => {
  const { data, cardColor, navigate } = props;
  const keysToShow = ['name', 'id', 'age', 'balance', 'company', 'email'];
  const map = new Map<string, string | number>(data && Object.entries(data));
  const classes = useStyles({ ...props });

  return (
    <Container className={classes.card}>
      <Row
        className={classes.cardRow}
        style={{ backgroundColor: cardColor || 'none' }}
      >
        <Col md={3} sm={12} className={classes.cardImgContainer}>
          <img
            src={data?.picture}
            className={classes.cardImg}
            alt={"Suspect's portrait"}
          />
        </Col>
        <Col md={8} sm={12} className={classes.cardStats}>
          <ListGroup variant={'flush'}>
            {keysToShow.map((key, index) => (
              <ListGroupItem key={'li' + index} className={classes.cardItem}>
                <b>{key[0].toUpperCase() + key.substring(1)}</b>: {''}
                <i>{map.get(key)}</i>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col md={1} sm={12} className={classes.cardBtns}>
          <ButtonGroup vertical>
            <Button
              size="sm"
              onClick={() => (navigate ? navigate(`/person/${data?.id}`) : '')}
            >
              Details
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonCard;
