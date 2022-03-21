import React, { useState } from 'react';
import { ISuspect } from '../../utils/types';
import Gallery from '../Gallery';
import PersonList from '../PersonList';
import {
  Container,
  ImgContainer,
  NavTabsList,
  NavTabsItem,
  TabContentContainer,
  PersonalItensList
} from './styles';
import {
  CardUListItem,
  PropertyName,
  PropertyValue
} from '../PersonCard/styles';
import PersonCard from '../PersonCard';
import { Headline } from '../../styles/common';
import { Fade } from 'react-bootstrap';

export interface IPersonDetailsProps {
  data?: ISuspect;
  imageHeight?: string;
}

type EntryValue = string | number | object | never;

const personalDetailsItens = (dataEntries?: [string, EntryValue][]) => (
  <PersonalItensList>
    {dataEntries
      ?.filter(([k]) => k !== 'picture' && k !== 'participants')
      .map(([key, value], index) => {
        return (
          <CardUListItem key={index + 'litem'}>
            <PropertyName darkText>
              <p>{key.toUpperCase()}</p>
            </PropertyName>
            <PropertyValue>
              <i>{value}</i>
            </PropertyValue>
          </CardUListItem>
        );
      })}
  </PersonalItensList>
);

const PersonDetails: React.FC<IPersonDetailsProps> = ({
  data,
  imageHeight
}) => {
  const dataEntries = data && Object.entries(data);

  const tabs = ['personal', 'pictures', 'participants'];
  const [activeTab, setActiveTab] = useState('personal');
  const handleClickTab: (tab: string) => void = (tab) => {
    if (tabs.includes(tab)) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <Container style={{ padding: '1rem' }}>
        <ImgContainer>
          <img
            src={data?.picture}
            alt={'Person Avatar'}
            height={imageHeight}
            width={imageHeight}
          />
        </ImgContainer>
        <hr />

        <NavTabsList>
          {tabs.map((tab, index) => (
            <NavTabsItem
              key={tab + index + 'tab'}
              onClick={() => handleClickTab(tab)}
              isActive={activeTab === tab}
            >
              {tab[0].toUpperCase() + tab.substring(1).toLowerCase()}
            </NavTabsItem>
          ))}
        </NavTabsList>
      </Container>
      <TabContentContainer>
        <Container>
          <Fade in={!!activeTab} timeout={300}>
            <Headline style={{ marginRight: '1rem' }}>
              {activeTab[0].toUpperCase() +
                activeTab.substring(1).toLowerCase()}
            </Headline>
          </Fade>
        </Container>
        <hr style={{ alignSelf: 'stretch', marginRight: '2rem' }} />
        <Fade in={activeTab === 'personal'} timeout={300}>
          {(activeTab === 'personal' && personalDetailsItens(dataEntries)) || (
            <></>
          )}
        </Fade>
        <Fade in={activeTab === 'pictures'} timeout={300}>
          {(activeTab === 'pictures' && (
            <Gallery
              pictures={data?.picture ? [data.picture, data.picture] : []}
            />
          )) || <></>}
        </Fade>
        <Fade in={activeTab === 'participants'} timeout={300}>
          {(activeTab === 'participants' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '0 auto'
              }}
            >
              <PersonList people={data?.participants} />
            </div>
          )) || <></>}
        </Fade>
      </TabContentContainer>
    </>
  );
};

PersonCard.defaultProps = {
  imageHeight: '225px'
};

export default PersonDetails;
