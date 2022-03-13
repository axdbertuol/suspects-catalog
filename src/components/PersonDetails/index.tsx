import React from 'react';
import { ISuspect } from '../../utils/types';
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Nav,
  Row,
  Tab
} from 'react-bootstrap';
import Gallery from '../Gallery';
import SimpleGallery from '../SimpleGallery';
import PersonList from '../PersonList';

interface IPersonDetailsProps {
  data?: ISuspect;
}

type EntryValue = string | number | object | never;

const personalDetailsItens = (dataEntries?: [string, EntryValue][]) => (
  <>
    {dataEntries
      ?.filter(([k]) => k !== 'picture' && k !== 'participants')
      .map(([key, value], index) => {
        return (
          <ListGroupItem key={'litem' + index}>
            <b>{key[0].toUpperCase() + key.substring(1)}</b>: {''}
            <i>{`${value}`}</i>
          </ListGroupItem>
        );
      })}
  </>
);

const PersonDetails: React.FC<IPersonDetailsProps> = ({ data }) => {
  const dataEntries = data && Object.entries(data);
  const dataMap = dataEntries && new Map(dataEntries);
  const participants: Array<ISuspect> | undefined = data?.participants;

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <img
            src={data?.picture}
            className={'details-img'}
            alt={"Suspect's portrait"}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Tab.Container defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="personal">Personal</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="pictures">Pictures</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="participants">Participants</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="personal">
                    <ListGroup variant={'flush'}>
                      {dataEntries && personalDetailsItens(dataEntries)}
                    </ListGroup>
                  </Tab.Pane>
                  <Tab.Pane eventKey="pictures">
                    {dataMap && (
                      <Gallery
                        pictures={[
                          dataMap.get('picture'),
                          dataMap.get('picture')
                        ]}
                      />
                    )}
                  </Tab.Pane>
                  <Tab.Pane eventKey="participants">
                    {participants && participants.length > 0 && (
                      <PersonList people={participants} />
                    )}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonDetails;
