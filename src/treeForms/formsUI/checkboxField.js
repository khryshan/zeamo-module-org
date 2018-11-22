import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import Checkbox from 'redux-form-material-ui/lib/Checkbox';
import { Field } from 'redux-form';

import { userFormStyles } from '../../defaultStyles';

const CheckboxField = ({ name, label }) => (<Row>
  <Col xs={12} style={userFormStyles.checkboxWrapperStyle}>
    <Field
      name={name}
      component={Checkbox}
      label={label}
      labelStyle={userFormStyles.checkboxLabelStyle}
    />
  </Col>
</Row>);

export default CheckboxField;
