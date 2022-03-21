import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ISuspect as IRegisterFormValues } from '../../utils/types';
import { saveSuspect } from '../../api/suspectsApi';
import PersonForm from '../../components/PersonForm';
import { Headline } from '../../styles/common';

const SuspectRegisterPage = () => {
  const handleSave: (values: IRegisterFormValues) => void = (
    values: IRegisterFormValues
  ) => {
    if (values) {
      const suspect = { ...values };
      suspect.registered = Date.now().toString(10);
      saveSuspect(suspect)
        // eslint-disable-next-line no-console
        .then((r) => console.log('salvo', r.statusText))
        // eslint-disable-next-line no-console
        .catch((e) => console.error(e));
    }
  };
  return (
    <Container
      fluid={'sm'}
      style={{
        marginTop: '50px',
        width: '40%'
      }}
    >
      <Row>
        <Col>
          <Headline>Registration Page</Headline>
        </Col>
        <Col xs={12}>
          <hr />
        </Col>
      </Row>
      <PersonForm handleSave={handleSave} />
    </Container>
  );
};

export default SuspectRegisterPage;
