import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import { Field } from 'redux-form';
import TextF from 'redux-form-material-ui/lib/TextField';

import { userFormStyles } from '../../defaultStyles';
import { required as requiredValidation } from '../validations'
const TextField = ({ name, hintText, floatingLabel, required, ...extra }) => (<Row>
  <Col xs={12}>
    <Field
      fullWidth
      name={name}
      component={TextF}
      hintText={hintText}
      floatingLabelFixed
      parse={(b) => b.replace(/\s\s+/g, ' ')}
      floatingLabelStyle={userFormStyles.floatingLabelText}
      floatingLabelText={floatingLabel}
      {...extra}
      validate={required ? requiredValidation : undefined}
    />
  </Col>
</Row>);

export default TextField;
