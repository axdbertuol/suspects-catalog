import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Person from '../../components/Person';
import { ISuspect } from '../../utils/types';
import { getAllSuspects } from '../../api/suspectsApi';
import Headline from '../../components/Headline';

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
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Headline text={'People'} />
        </Col>
      </Row>
      {!loading && suspects.map((susp) => <Person data={susp} />)}
    </Container>
  );
};

export default SuspectListPage;
