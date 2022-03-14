import { Col, FloatingLabel, Form } from 'react-bootstrap';
import React, { ChangeEventHandler } from 'react';

interface IFormTextField {
  keyLabel: string;
  formType?: 'text' | 'textarea' | 'number';
  value: string | number | undefined;
  touched?: boolean;
  errors?: string | Array<string>;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleBlur: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  md?: string;
}

const FormField: React.FC<IFormTextField> = ({
  keyLabel,
  value,
  handleChange,
  handleBlur,
  errors,
  touched,
  formType = 'text',
  md = ''
}) => {
  const label = keyLabel[0].toUpperCase() + keyLabel.substring(1);
  return (
    <Form.Group as={Col} md={md} xs="12" className={'formSpacing'}>
      <FloatingLabel label={label}>
        {formType === 'textarea' ? (
          <Form.Control
            type={formType}
            name={keyLabel}
            as={formType}
            style={{ height: '150px' }}
            id={keyLabel}
            placeholder={label}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={touched && !errors}
            isInvalid={touched && !!errors}
          />
        ) : (
          <Form.Control
            type={formType}
            name={keyLabel}
            id={keyLabel}
            placeholder={label}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={touched && !errors}
            isInvalid={touched && !!errors}
          />
        )}
        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
      </FloatingLabel>
    </Form.Group>
  );
};

export default FormField;
