import styled from 'styled-components';
import { Container as MContainer } from '../../styles/common';

export const Container = styled(MContainer)`
  margin: 0 10rem;
  flex-flow: row;
  flex-grow: 1;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};
`;
