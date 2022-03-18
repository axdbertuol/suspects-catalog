import React, { useEffect, useState } from 'react';
import { ListContainer, SubHeader } from './styles';
import { ISuspect } from '../../utils/types';
import { getAllSuspects } from '../../api/suspectsApi';
import PersonList from '../../components/PersonList';
import { Headline } from '../../styles/common';

const SuspectListPage = () => {
  const [suspects, setSuspects] = useState<Array<ISuspect>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!suspects || suspects.length == 0) {
      setLoading(true);
      getAllSuspects()
        .then((r) => {
          setSuspects(r.data);
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  }, [suspects]);

  return (
    <>
      <SubHeader>
        <Headline>People</Headline>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere
          a lectus ut lobortis. Praesent in arcu nibh. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Ut in cursus metus. Mauris quis
          maximus dui. Donec erat nibh, varius volutpat ligula eget, dignissim
          vulputate mauris. Morbi at risus ornare, ultrices sem ac, vehicula
          orci.
        </p>
      </SubHeader>
      <ListContainer>
        {!loading && <PersonList people={suspects} />}
      </ListContainer>
    </>
  );
};

export default SuspectListPage;
