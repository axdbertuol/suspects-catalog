import React, { useState } from 'react';
import { ISuspect } from '../../utils/types';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Gallery from '../Gallery';
import SimpleGallery from '../SimpleGallery';
import PersonList from '../PersonList';
import { ITheme } from '../../App';
import useStyles from './useStyles';

export interface IPersonDetailsProps {
  data?: ISuspect;
  imgHeight?: string;
  theme?: ITheme;
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

const PersonDetails: React.FC<IPersonDetailsProps> = (props) => {
  const { data, imgHeight, theme } = props;
  const dataEntries = data && Object.entries(data);
  const dataMap = dataEntries && new Map(dataEntries);
  const participants: Array<ISuspect> | undefined = data?.participants;
  const classes = useStyles({ ...props });

  const tabs = ['personal', 'pictures', 'participants'];
  const [activeTab, setActiveTab] = useState('personal');
  const handleClickTab: (tab: string) => void = (tab) => {
    if (tabs.includes(tab)) {
      setActiveTab(tab);
    }
  };

  return (
    <Container className={classes.detailsContainer}>
      <Row className={classes.imgContainer}>
        <Col sm={12}>
          <img
            src={data?.picture}
            className={classes.detailsImg}
            alt={"Suspect's portrait"}
          />
        </Col>
      </Row>
      <Row className={classes.navContainer}>
        <Col md={3} sm={12}>
          <ul className={classes.navTabs}>
            {tabs.map((tab) => (
              <li
                className={
                  activeTab === tab ? classes.selectedNavItem : classes.navItem
                }
                onClick={() => handleClickTab(tab)}
              >
                <a
                  className={
                    activeTab === tab
                      ? classes.selectedNavLink
                      : classes.navLink
                  }
                >
                  {tab[0].toUpperCase() + tab.substring(1)}
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col md={8} sm={12}>
          {activeTab === 'personal' && (
            <ListGroup variant={'flush'}>
              {dataEntries && personalDetailsItens(dataEntries)}
            </ListGroup>
          )}
          {activeTab === 'pictures' && <div>yyy</div>}
        </Col>
        {/*<Tab.Container defaultActiveKey="personal">*/}
        {/*  <Row>*/}
        {/*    <Col sm={3}>*/}
        {/*      <Nav variant="pills" className="flex-column">*/}
        {/*        {tabs.map((t) => (*/}
        {/*          <Nav.Item>*/}
        {/*            <Nav.Link eventKey={t}>*/}
        {/*              {t[0].toUpperCase() + t.substring(1)}*/}
        {/*            </Nav.Link>*/}
        {/*          </Nav.Item>*/}
        {/*        ))}*/}
        {/*      </Nav>*/}
        {/*    </Col>*/}
        {/*    <Col sm={9}>*/}
        {/*      <Tab.Content>*/}
        {/*        <Tab.Pane eventKey="personal">*/}
        {/*          <ListGroup variant={'flush'}>*/}
        {/*            {dataEntries && personalDetailsItens(dataEntries)}*/}
        {/*          </ListGroup>*/}
        {/*        </Tab.Pane>*/}
        {/*        <Tab.Pane eventKey="pictures">*/}
        {/*          {dataMap && (*/}
        {/*            <Gallery*/}
        {/*              pictures={[*/}
        {/*                dataMap.get('picture'),*/}
        {/*                dataMap.get('picture')*/}
        {/*              ]}*/}
        {/*            />*/}
        {/*          )}*/}
        {/*        </Tab.Pane>*/}
        {/*        <Tab.Pane eventKey="participants">*/}
        {/*          {participants && participants.length > 0 && (*/}
        {/*            <PersonList people={participants} />*/}
        {/*          )}*/}
        {/*        </Tab.Pane>*/}
        {/*      </Tab.Content>*/}
        {/*    </Col>*/}
        {/*  </Row>*/}
        {/*</Tab.Container>*/}
      </Row>
    </Container>
  );
};

export default PersonDetails;
