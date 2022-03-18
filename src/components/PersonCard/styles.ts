import styled from 'styled-components';
import { Container, FlexCol, FlexRow } from '../../styles/common';
import { NavLink } from 'react-router-dom';

export const CardContainer = styled(Container)`
  margin: 0.8rem auto;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 4px 12px;
  border-radius: 7px;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const CardImgContainer = styled(Container)`
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.primary.main};
`;

export const CardImg = styled.img`
  object-fit: cover;
  border-radius: 5px;
`;

export const CardContentContainer = styled(FlexCol)`
  margin-left: 1rem;
`;

export const CardUList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  min-width: 400px;
`;

interface CardUListItemProps {
  bgColor?: string | 'transparent';
}

export const CardUListItem = styled.li<CardUListItemProps>`
  display: flex;
  letter-spacing: 0.8px;
  padding-bottom: 5px;
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
  width: 25%;
  display: flex;

  p {
    margin: 0;
  }
`;

export const PropertyValue = styled(Property)`
  font-weight: 300;
  text-align: justify;
  overflow: hidden;
  text-overflow: fade;
  width: 75%;
`;

export const BtnsContainer = styled(FlexRow)`
  justify-content: flex-start;
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
