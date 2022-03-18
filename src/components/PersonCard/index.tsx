import React from 'react';

import { ISuspect } from '../../utils/types';

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
  maxHeight?: string;
  imageHeight?: string;
  imageWidth?: string;
}

const PersonCard: React.FC<IPropsCard> = ({
  data,
  imageHeight = '225px',
  imageWidth = '225px'
}) => {
  const keysToShow = ['name', 'id', 'age', 'balance', 'company', 'email'];
  const dataMap = data && new Map(Object.entries(data));
  return (
    <CardContainer>
      <CardImgContainer>
        <CardImg height={imageHeight} width={imageWidth} src={data?.picture} />
      </CardImgContainer>

      <CardContentContainer>
        <CardUList>
          {dataMap &&
            keysToShow.map((key, index) => {
              return (
                <CardUListItem key={index + 'litem'}>
                  <PropertyName>
                    <p>{key.toUpperCase()}</p>
                  </PropertyName>
                  <PropertyValue>
                    <i>{dataMap.get(key)}</i>
                  </PropertyValue>
                </CardUListItem>
              );
            })}
        </CardUList>
        <BtnsContainer>
          <BtnDetails to={`/person/${data?.id}`}>D</BtnDetails>
        </BtnsContainer>
      </CardContentContainer>
    </CardContainer>
  );
};

PersonCard.defaultProps = {
  imageHeight: '225px',
  imageWidth: '225px'
};

export default PersonCard;
