import styled from 'styled-components';
import { Container, FlexCol, FlexRow } from '../../styles/common';
import { NavLink } from 'react-router-dom';

export const CardContainer = styled(Container)`
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 4px 12px;
  border-radius: 7px;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.secondary};

  @media screen and (max-width: 900px) {
    width: 60vw;
  }
  @media screen and (min-width: 901px) and (max-width: 1200px) {
    width: 40vw;
  }
  @media screen and (min-width: 1201px) and (max-width: 1500px) {
    width: 30vw;
  }
`;

export const CardImgContainer = styled(Container)`
  align-items: flex-start;
`;

export const CardImg = styled.img`
  object-fit: cover;
  border-radius: 5px;
`;

export const CardContentContainer = styled(FlexCol)`
  margin-left: 1rem;
  //flex-direction: row;
`;

export const CardUList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    width: 30vw;
  }
  @media screen and (min-width: 1500px) {
    width: 15vw;
  }
`;

interface CardUListItemProps {
  bgColor?: string | 'transparent';
}

export const CardUListItem = styled.li<CardUListItemProps>`
  border-bottom: 1px solid ${(props) => props.theme.colors.primary.main};
  :nth-last-child(1) {
    border-bottom: unset;
  }
  flex-grow: 1;
  display: flex;
  letter-spacing: 0.8px;
  padding: 7px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

interface IPropertyProps {
  color?: string;
  darkText?: boolean;
  lightText?: boolean;
}

export const Property = styled.span<IPropertyProps>`
  color: ${(props) =>
    props.color ||
    (props.darkText && props.theme.colors.text) ||
    (props.lightText && props.theme.colors.secondary)};
`;

export const PropertyName = styled(Property)`
  font-weight: 500;
  display: flex;
  width: 30%;
  p {
    margin: 0;
    //text-align: justify;
    text-align: center;
  }
`;

export const PropertyValue = styled(Property)`
  font-weight: 300;
  padding-left: 5px;
  padding-right: 15px;
  width: 70%;
  overflow: hidden;
  p {
    margin: 0;
    //text-align: justify;
  }
`;

export const BtnsContainer = styled(FlexRow)`
  justify-content: center;
  align-items: baseline;
`;

export const Btn = styled(NavLink)`
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 5px 10px;
  color: ${(props) => props.theme.colors.text};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.1) 0 7px 20px;
    color: cornflowerblue;
  }
  &:active {
    transition: all 0.2s ease-in-out;
    background-color: salmon;
  }
`;

export const BtnDetails = styled(Btn)`
  background-color: ${(props) => props.theme.colors.primary.light};
`;
