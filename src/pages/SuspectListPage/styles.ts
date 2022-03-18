import styled from 'styled-components';
import { Container } from '../../styles/common';

export const ListContainer = styled(Container)`
  margin: 0 auto;
  flex-flow: row wrap;
  background-color: ${(props) => props.theme.colors.primary.light};
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
