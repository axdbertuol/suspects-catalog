import styled from 'styled-components';

export const RoundContainer = styled.div`
  color: ${(props) => props.theme.colors.text};
  display: flex;
  border-radius: 10px;
`;

export const Container = styled.div`
  color: ${(props) => props.theme.colors.text};
  display: flex;
`;

export const FlexCol = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
`;

export const Headline = styled.h2`
  padding: 10px 15px;
  text-align: center;
  font-weight: 100;
`;
