import React, { useMemo } from 'react';
import { ISuspect } from '../../utils/types';
import PersonCard from '../PersonCard';

interface IPersonListProps {
  people?: Array<ISuspect>;
}

const PersonList: React.FC<IPersonListProps> = ({ people }) => {
  const memoizedMap = useMemo(
    () =>
      people &&
      people.map((person, index) => {
        const color: string =
          index % 2 == 0 ? 'rgba(0,0,0,.05)' : 'rgba(0,0,0,.15)';
        return <PersonCard key={person.id} data={person} cardColor={color} />;
      }),
    people
  );

  return <>{memoizedMap}</>;
};

export default PersonList;
