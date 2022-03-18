import React, { useState } from 'react';
import { ISuspect } from '../../utils/types';
import Gallery from '../Gallery';
import PersonList from '../PersonList';
import {
  Container,
  ImgContainer,
  NavContainer,
  NavTabsList,
  NavTabsItem,
  TabContentContainer
} from './styles';
import {
  CardUList,
  CardUListItem,
  PropertyName,
  PropertyValue
} from '../PersonCard/styles';
import PersonCard from '../PersonCard';
import { Headline } from '../../styles/common';

export interface IPersonDetailsProps {
  data?: ISuspect;
  imageHeight?: string;
}

type EntryValue = string | number | object | never;

const personalDetailsItens = (dataEntries?: [string, EntryValue][]) => (
  <CardUList>
    {dataEntries
      ?.filter(([k]) => k !== 'picture' && k !== 'participants')
      .map(([key, value], index) => {
        return (
          <CardUListItem key={index + 'litem'}>
            <PropertyName lightText>
              <p>{key.toUpperCase()}</p>
            </PropertyName>
            <PropertyValue>
              <i>{value}</i>
            </PropertyValue>
          </CardUListItem>
        );
      })}
  </CardUList>
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
      <Container>
        <ImgContainer>
          <img
            src={data?.picture}
            alt={'Person Avatar'}
            height={imageHeight}
            width={imageHeight}
          />
        </ImgContainer>
        <NavContainer>
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
        </NavContainer>
      </Container>
      <TabContentContainer>
        <Headline>
          {activeTab[0].toUpperCase() + activeTab.substring(1).toLowerCase()}
        </Headline>
        <hr />
        {activeTab === 'personal' && personalDetailsItens(dataEntries)}
        {activeTab === 'pictures' && (
          <Gallery
            pictures={data?.picture ? [data.picture, data.picture] : []}
          />
        )}
        {activeTab === 'participants' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '0 auto'
            }}
          >
            <PersonList people={data?.participants} />
          </div>
        )}
      </TabContentContainer>
    </>
  );
};

PersonCard.defaultProps = {
  imageHeight: '225px'
};

export default PersonDetails;
