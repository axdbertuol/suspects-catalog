import React, { useMemo } from 'react';
import { ISuspect } from '../../utils/types';
import Person from '../Person';

interface IPersonListProps {
  people?: Array<ISuspect>;
}

const PersonList: React.FC<IPersonListProps> = ({ people }) => {
  const memoizedMap = useMemo(
    () => people && people.map((person) => <Person data={person} />),
    people
  );

  return <div>{memoizedMap}</div>;
};

export default PersonList;
