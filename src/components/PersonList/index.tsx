import React, { useContext, useMemo } from 'react';
import { ISuspect } from '../../utils/types';
import PersonCard from '../PersonCard';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

interface IPersonListProps {
  people?: Array<ISuspect>;
}

const PersonList: React.FC<IPersonListProps> = ({ people }) => {
  const { colors, title } = useContext(ThemeContext);

  const memoizedMap = useMemo(
    () =>
      people &&
      people.map((person, index) => {
        const color: string = index % 2 == 0 ? 'gray' : 'black';
        return <PersonCard key={person.id} data={person} cardColor={color} />;
      }),
    people
  );

  return <>{memoizedMap}</>;
};

export default PersonList;
