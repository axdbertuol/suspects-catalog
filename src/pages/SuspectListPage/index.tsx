import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { ISuspect } from '../../utils/types';
import { getAllSuspects } from '../../api/suspectsApi';
import Headline from '../../components/Headline';
import PersonList from '../../components/PersonList';
import { useNavigate } from 'react-router-dom';

const SuspectListPage = () => {
  const [suspects, setSuspects] = useState<Array<ISuspect>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

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
    <Container>
      <Headline text={'People'} />
      {!loading && <PersonList navigate={navigate} people={suspects} />}
    </Container>
  );
};

export default SuspectListPage;
