import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ISuspect as IRegisterFormValues } from '../../utils/types';
import './style.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import FormField from '../PersonFormField';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <FormField
        keyLabel={'name'}
        formType={'text'}
        value={values.name}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched.name}
        errors={errors.name}
      />
      <FormField
        keyLabel={'email'}
        formType={'text'}
        value={values.email}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched.email}
        errors={errors.email}
      />
      <Row style={{ flexDirection: 'row' }}>
        <FormField
          keyLabel={'age'}
          value={values.age}
          handleChange={handleChange}
          handleBlur={handleBlur}
          formType={'number'}
          md={'4'}
          touched={touched.age}
          errors={errors.age}
        />
        <FormField
          keyLabel={'gender'}
          value={values.gender}
          handleChange={handleChange}
          handleBlur={handleBlur}
          formType={'text'}
          md={'4'}
          touched={touched.gender}
          errors={errors.gender}
        />
      </Row>
      <FormField
        keyLabel={'eyeColor'}
        value={values.eyeColor}
        handleChange={handleChange}
        handleBlur={handleBlur}
        md={'6'}
        touched={touched.eyeColor}
        errors={errors.eyeColor}
      />
      <FormField
        keyLabel={'phone'}
        value={values.phone}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched.phone}
        errors={errors.phone}
      />
      <FormField
        keyLabel={'balance'}
        value={values.balance}
        handleChange={handleChange}
        handleBlur={handleBlur}
        formType={'number'}
        touched={touched.balance}
        errors={errors.balance}
      />
      <FormField
        keyLabel={'address'}
        value={values.address}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched.address}
        errors={errors.address}
      />
      <FormField
        keyLabel={'company'}
        value={values.company}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched.company}
        errors={errors.company}
      />
      <FormField
        keyLabel={'about'}
        value={values.about}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched.about}
        errors={errors.about}
        formType={'textarea'}
      />
      <FormField
        keyLabel={'latitude'}
        value={values.latitude}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched.latitude}
        errors={errors.latitude}
      />
      <FormField
        keyLabel={'longitude'}
        value={values.longitude}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched.longitude}
        errors={errors.longitude}
      />
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
