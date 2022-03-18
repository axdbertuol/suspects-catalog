import React, { useState } from 'react';
import { ISuspect } from '../../utils/types';
import Gallery from '../Gallery';
import SimpleGallery from '../SimpleGallery';
import PersonList from '../PersonList';
import {
  Container,
  ImgContainer,
  NavContainer,
  NavTabsList,
  NavTabsItem
} from './styles';

export interface IPersonDetailsProps {
  data?: ISuspect;
  imgHeight?: string;
}

type EntryValue = string | number | object | never;

const personalDetailsItens = (dataEntries?: [string, EntryValue][]) => (
  <ul>
    {dataEntries
      ?.filter(([k]) => k !== 'picture' && k !== 'participants')
      .map(([key, value], index) => {
        return (
          <li key={'litem' + index}>
            <b>{key[0].toUpperCase() + key.substring(1).toLowerCase()}</b>: {''}
            <i>{`${value}`}</i>
          </li>
        );
      })}
  </ul>
);

const PersonDetails: React.FC<IPersonDetailsProps> = ({ data, imgHeight }) => {
  const dataEntries = data && Object.entries(data);
  const dataMap = dataEntries && new Map(dataEntries);
  const participants: Array<ISuspect> | undefined = data?.participants;

  const tabs = ['personal', 'pictures', 'participants'];
  const [activeTab, setActiveTab] = useState('personal');
  const handleClickTab: (tab: string) => void = (tab) => {
    if (tabs.includes(tab)) {
      setActiveTab(tab);
    }
  };

  return (
    <Container>
      <ImgContainer>
        <img src={data?.picture} alt={'Person Avatar'} />
      </ImgContainer>
      <NavContainer>
        <NavTabsList>
          {tabs.map((tab) => (
            <NavTabsItem onClick={() => handleClickTab(tab)}>
              {tab[0].toUpperCase() + tab.substring(1).toLowerCase()}
            </NavTabsItem>
          ))}
        </NavTabsList>
      </NavContainer>
      <Container>{activeTab === 'personal' && personalDetailsItens}</Container>
    </Container>
  );
};

export default PersonDetails;
