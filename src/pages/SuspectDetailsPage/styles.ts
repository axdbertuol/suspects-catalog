import styled from 'styled-components';
import { Container as MContainer } from '../../styles/common';

export const Container = styled(MContainer)`
  margin: 0.2rem auto;
  flex-flow: row;
  min-height: 700px;
  height: max-content;
  //background-color: ${(props) => props.theme.colors.secondary};
`;
