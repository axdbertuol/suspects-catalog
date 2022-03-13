import React, { useMemo } from 'react';
import { ISuspect } from '../../utils/types';
import PersonCard from '../PersonCard';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useTheme } from 'react-jss';
import { ITheme } from '../../App';

interface IPersonListProps {
  people?: Array<ISuspect>;
  navigate?: NavigateFunction;
}

const PersonList: React.FC<IPersonListProps> = ({ people, navigate }) => {
  const theme: ITheme = useTheme();
  const memoizedMap = useMemo(
    () =>
      people &&
      people.map((person, index) => {
        const color: string =
          index % 2 == 0 ? theme.color.gray05 : theme.color.gray01;
        return (
          <PersonCard
            navigate={navigate}
            key={person.id}
            data={person}
            cardColor={color}
          />
        );
      }),
    people
  );

  return <>{memoizedMap}</>;
};

export default PersonList;
