import styled from 'styled-components';
import { Container } from '../../styles/common';

export const CardContainer = styled(Container)`
  margin: 0.8rem auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
`;

export const CardImgContainer = styled(Container)`
  //justify-items: center;
  align-items: center;
`;

export const CardImg = styled.img`
  object-fit: cover;
  border-radius: 5px;
`;

export const CardContentContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

export const CardUList = styled.ul`
  list-style: none;
  overflow: hidden;
  text-overflow: fade;
  min-width: 500px;
`;

interface CardUListItemProps {
  bgColor?: string | 'transparent';
}
export const CardUListItem = styled.li<CardUListItemProps>`
  background-color: ${(props) => props.bgColor};
  display: flex;
  padding-top: 5px;
  letter-spacing: 0.8px;
`;

export const PropertyName = styled.span`
  //background-color: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.text};
  padding: 5px;
  font-weight: 500;
  width: 25%;
  border-radius: 10px;
`;
export const PropertyValue = styled.span`
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 5px;
  font-weight: 300;
  text-align: center;
  border-radius: 10px;
  width: 75%;
`;

export const BtnsContainer = styled(Container)`
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  //background-color: black;
`;

export const Btn = styled.button`
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 10px 22px;
  color: ${(props) => props.theme.colors.secondary};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: 5px;
  &:hover {
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.5) 0 7px 20px;
  }
`;

export const BtnDetails = styled(Btn)`
  background-color: ${(props) => props.theme.colors.text};
`;
