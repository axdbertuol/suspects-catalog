import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ISuspect as IRegisterFormValues } from '../../utils/types';
import './style.css';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';

interface IPersonFormProps {
  handleSave: (values: IRegisterFormValues) => void;
}

const PersonForm: React.FC<IPersonFormProps> = ({ handleSave }) => {
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
      registered: '',
      latitude: 0,
      longitude: 0
    },
    validationSchema: yup.object({
      name: yup.string().required(),
      age: yup.number().moreThan(16).integer().required(),
      eyeColor: yup.string().required(),
      gender: yup.string().required(),
      company: yup.string().required(),
      email: yup.string().required(),
      phone: yup.string().required(),
      address: yup.string().required(),
      about: yup.string(),
      balance: yup.number(),
      registered: yup.boolean(),
      latitude: yup.number(),
      longitude: yup.number()
    }),
    onSubmit: handleSave
  });
  return (
    <Form onSubmit={handleSubmit} onReset={handleReset}>
      <Form.Group as={Col} xs="12" className={'formSpacing'}>
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

      <Form.Group as={Col} xs="12" className={'formSpacing'}>
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
      <Row style={{ flexDirection: 'row' }}>
        <Form.Group as={Col} md="2" xs="12" className={'formSpacing'}>
          <FloatingLabel label="Age">
            <Form.Control
              type="text"
              name="age"
              id="age"
              placeholder="Age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.age && !errors.age}
              isInvalid={touched.age && !!errors.age}
            />
            <Form.Control.Feedback type="invalid">
              {errors.age}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col} md="4" xs="12" className={'formSpacing'}>
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

        <Form.Group as={Col} md={'6'} xs="12" className={'formSpacing'}>
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
      <Form.Group as={Col} xs="12" className={'formSpacing'}>
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
      <Form.Group as={Col} xs="12" className={'formSpacing'}>
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
      <Form.Group as={Col} xs="12" className={'formSpacing'}>
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

      <Form.Group as={Col} xs="12" className={'formSpacing'}>
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

      <Form.Group as={Col} xs="12" className={'formSpacing'}>
        <FloatingLabel label="About">
          <Form.Control
            type="text"
            as={'textarea'}
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
            {errors.about}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
      <Row style={{ flexDirection: 'row' }} className={'formSpacing'}>
        <Form.Group as={Col} md={'5'} xs="12" style={{ marginRight: 'auto' }}>
          <FloatingLabel label="Latitude">
            <Form.Control
              type="text"
              name="latitude"
              id="latitude"
              placeholder="Latitude"
              value={values.latitude}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.latitude && !errors.latitude}
              isInvalid={touched.latitude && !!errors.latitude}
            />
            <Form.Control.Feedback type="invalid">
              {errors.latitude}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col} md={'6'} xs="12">
          <FloatingLabel label="Longitude">
            <Form.Control
              type="text"
              name="longitude"
              id="longitude"
              placeholder="Longitude"
              value={values.longitude}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.longitude && !errors.longitude}
              isInvalid={touched.longitude && !!errors.longitude}
            />
            <Form.Control.Feedback type="invalid">
              {errors.address}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
      </Row>
      <Row>
        <Col>
          <Button size={'lg'} type="submit" variant={'dark'}>
            Register
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default PersonForm;
