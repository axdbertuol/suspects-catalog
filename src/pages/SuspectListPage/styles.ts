import styled from 'styled-components';
import { Container as MContainer } from '../../styles/common';

export const Container = styled(MContainer)`
  margin: 0.8rem auto;
  flex-flow: column wrap;
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  background-color: ${(props) => props.theme.colors.secondary};
`;
