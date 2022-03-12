import React, { useEffect, useState } from 'react';
import { useNavigationType, useParams } from 'react-router-dom';
import { ISuspect } from '../../utils/types';
import { getSuspectById } from '../../api/suspectsApi';
import { Container } from 'react-bootstrap';
import PersonDetails from '../../components/PersonDetails';

const SuspectDetailsPage = () => {
  const [suspect, setSuspect] = useState<ISuspect | undefined>(undefined);
  const naviType = useNavigationType();
  const [loading, setLoading] = useState<boolean>(false);

  const params = useParams();

  useEffect(() => {
    // eslint-disable-next-line no-debugger
    if (!suspect) {
      // eslint-disable-next-line no-debugger
      console.log('passei');
      setLoading(true);
      getSuspectById(params.id)
        .then((response) => {
          // eslint-disable-next-line no-debugger
          console.log('response', response);
          if (response.data[0]) {
            setSuspect(response.data[0]);
          }
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.error(err))
        .finally(() => {
          console.log('s', suspect);
          setLoading(false);
        });
    }
  }, [suspect]);

  return (
    <Container>
      {!loading ? <PersonDetails data={suspect} /> : 'loading..'}
    </Container>
  );
};

export default SuspectDetailsPage;
