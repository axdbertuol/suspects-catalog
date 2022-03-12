import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row
} from 'react-bootstrap';
import { saveSuspect } from '../../api/suspectsApi';
import { ISuspect as IRegisterFormValues } from '../../utils/types';

interface KeyValue {
  [key: string]: string | number | boolean;
}

const SuspectRegisterPage = () => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    handleReset
  } = useFormik({
    initialValues: {
      name: '',
      age: 0,
      eyeColor: '',
      gender: '',
      company: '',
      email: '',
      phone: '',
      address: '',
      about: '',
      balance: 0,
      registered: false,
      latitude: 0,
      longitude: 0
    },
    validationSchema: yup.object({
      name: yup.string().required().default(''),
      age: yup.number().integer().default(0),
      eyeColor: yup.string().required().default(''),
      gender: yup.string().required().default(''),
      company: yup.string().required().default(''),
      email: yup.string().required().default(''),
      phone: yup.string().required().default(''),
      address: yup.string().required().default(''),
      about: yup.string().default(''),
      balance: yup.number().default(0),
      registered: yup.boolean().default(false),
      latitude: yup.number().default(0),
      longitude: yup.number().default(0)
    }),
    onSubmit: (values: IRegisterFormValues) => {
      if (values) {
        const suspect = { ...values };
        saveSuspect(suspect)
          .then((r) => console.log('salvo', r.statusText))
          .catch((e) => console.error(e));
        // .finally(() => )
      }
    }
  });
  // TODO make component & refactor this
  return (
    <Container
      fluid={'sm'}
      style={{
        marginTop: '50px',
        width: '40%'
      }}
    >
      <Form onSubmit={handleSubmit} onReset={handleReset}>
        <Row>
          <Col>
            <h2 style={{ textAlign: 'center' }}>Register</h2>
          </Col>
          <Col xs={12}>
            <hr />
          </Col>
        </Row>
        <Row style={{ margin: '5px 0' }}>
          <Form.Group as={Col} xs="12" className="position-relative">
            <FloatingLabel label="Name">
              <Form.Control
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.name && !errors.name}
                isInvalid={touched.name && !!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row style={{ margin: '5px 0' }}>
          <Form.Group as={Col} xs="12" className="position-relative">
            <FloatingLabel label="Email">
              <Form.Control
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row style={{ margin: '5px 0' }}>
          <Form.Group as={Col} xs="12" className="position-relative">
            <FloatingLabel label="Company">
              <Form.Control
                type="text"
                name="company"
                id="company"
                placeholder="Company"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.company && !errors.company}
                isInvalid={touched.company && !!errors.company}
              />
              <Form.Control.Feedback type="invalid">
                {errors.company}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row style={{ margin: '5px 0' }}>
          <Form.Group as={Col} xs="12" className="position-relative">
            <FloatingLabel label="Eye Color">
              <Form.Control
                type="text"
                name="eyeColor"
                id="eyeColor"
                placeholder="Eye Color"
                value={values.eyeColor}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.eyeColor && !errors.eyeColor}
                isInvalid={touched.eyeColor && !!errors.eyeColor}
              />
              <Form.Control.Feedback type="invalid">
                {errors.eyeColor}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row style={{ margin: '5px 0' }}>
          <Form.Group as={Col} xs="12" className="position-relative">
            <FloatingLabel label="Gender">
              <Form.Control
                type="text"
                name="gender"
                id="gender"
                placeholder="Gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.gender && !errors.gender}
                isInvalid={touched.gender && !!errors.gender}
              />
              <Form.Control.Feedback type="invalid">
                {errors.gender}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row style={{ margin: '5px 0' }}>
          <Form.Group as={Col} xs="12" className="position-relative">
            <FloatingLabel label="Phone">
              <Form.Control
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.phone && !errors.phone}
                isInvalid={touched.phone && !!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row style={{ margin: '5px 0' }}>
          <Form.Group as={Col} xs="12" className="position-relative">
            <FloatingLabel label="Balance">
              <Form.Control
                type="number"
                name="balance"
                id="balance"
                placeholder="Balance"
                value={values.balance}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.balance && !errors.balance}
                isInvalid={touched.balance && !!errors.balance}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row style={{ margin: '5px 0' }}>
          <Form.Group as={Col} xs="12" className="position-relative">
            <FloatingLabel label="Address">
              <Form.Control
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.address && !errors.address}
                isInvalid={touched.address && !!errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row style={{ margin: '5px 0' }}>
          <Form.Group as={Col} xs="12" className="position-relative">
            <FloatingLabel label="About">
              <Form.Control
                type="text"
                name="about"
                id="about"
                placeholder="About"
                value={values.about}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.about && !errors.about}
                isInvalid={touched.about && !!errors.about}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row
          style={{
            margin: '5px 0',
            width: '50%',
            marginRight: 'auto',
            marginLeft: 'auto'
          }}
        >
          <Button type="submit" variant={'dark'}>
            Register
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default SuspectRegisterPage;
