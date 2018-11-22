import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-styled-flexboxgrid';
import { reduxForm } from 'redux-form';
import { FormWrapper, TextField, CheckboxField } from './formsUI';

let LocationChild = () => (
  <FormWrapper>
    <Col xs={12}>
      <TextField
        name="name"
        hintText="Location Name"
        required
        floatingLabel="Location Name"
      />
      <TextField
        name="description"
        hintText="Description"
        multiLine
        rows={3}
        rowsMax={4}
        maxLength={150}
        floatingLabel="Description"
      />
    </Col>

  </FormWrapper>
);

LocationChild = reduxForm({
  form: 'LocationChild',
  enableReinitialize: true,
})(LocationChild);
export default connect(
  null,
  null,
  null,
  { withRef: true })(LocationChild);
