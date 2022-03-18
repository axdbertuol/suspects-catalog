import React from 'react';

import { ISuspect } from '../../utils/types';
import { NavigateFunction } from 'react-router-dom';

import {
  CardContainer,
  CardContentContainer,
  CardImg,
  CardImgContainer,
  CardUList,
  CardUListItem,
  PropertyName,
  PropertyValue,
  BtnsContainer,
  BtnDetails
} from './styles';

export interface IPropsCard {
  data?: ISuspect;
  cardColor?: string;
  cardStatsBgColor?: string;
  navigate?: NavigateFunction;
  maxHeight?: string;
  imageHeight?: string;
  imageWidth?: string;
}

const PersonCard: React.FC<IPropsCard> = ({
  data,
  cardColor,
  navigate,
  imageHeight = '225px',
  imageWidth = '225px'
}) => {
  const keysToShow = ['name', 'id', 'age', 'balance', 'company', 'email'];
  const dataMap = data && new Map(Object.entries(data));
  return (
    <CardContainer>
      <CardContentContainer>
        <CardImgContainer>
          <CardImg
            height={imageHeight}
            width={imageWidth}
            src={data?.picture}
          />
        </CardImgContainer>
        <CardUList>
          {dataMap &&
            keysToShow.map((key, index) => {
              return (
                <CardUListItem key={index + 'litem'}>
                  <PropertyName>{key.toUpperCase()}</PropertyName>
                  <PropertyValue>
                    <i>{dataMap.get(key)}</i>
                  </PropertyValue>
                </CardUListItem>
              );
            })}
        </CardUList>
      </CardContentContainer>
      <BtnsContainer>
        <BtnDetails>Details</BtnDetails>
        <BtnDetails>Details</BtnDetails>
        <BtnDetails>Details</BtnDetails>
        <BtnDetails>Details</BtnDetails>
      </BtnsContainer>
    </CardContainer>
  );
};

export default PersonCard;
