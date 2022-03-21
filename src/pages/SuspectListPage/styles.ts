import styled from 'styled-components';
import { Container } from '../../styles/common';

export const ListContainer = styled(Container)`
  margin: 0 10rem;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap: 15px 0;
  background-color: ${(props) => props.theme.colors.primary.light};
  @media screen and (max-width: 900px) {
    margin: 0 5rem;
  }
`;

export const SubHeader = styled(Container)`
  flex-direction: column;
  height: 200px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary.light};
  p {
    text-align: center;
    margin: 0 auto;
    width: 50%;
  }
`;
