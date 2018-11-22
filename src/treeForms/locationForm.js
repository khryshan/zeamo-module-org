import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-styled-flexboxgrid';
import FlatButton from 'material-ui/FlatButton';
import { deleteButtonStyles } from '../defaultStyles';
import { reduxForm } from 'redux-form';
import { FormWrapper, TextField, CheckboxField } from './formsUI';
import { DeleteIcon } from '../icons';

let Location = (props) => (
  <FormWrapper>
    <Col xs={12}>
      <TextField
        name="name"
        required
        hintText="Location Name"
        floatingLabel="Location Name"
      />
      <TextField
        fullWidth
        name="description"
        hintText="Description"
        multiLine
        rows={3}
        rowsMax={4}
        maxLength={150}
        floatingLabelText="Description"
      />
      <Row>
        <Col xs={12}>
          <CheckboxField name="isActive" label="Active" />
        </Col>
        {(props.isAdmin || props.showDeleteButton)  && <Col xs={12} style={deleteButtonStyles.wrapper}>
          <FlatButton
            label="Delete node"
            disabled={!props.initialValues._id}
            labelStyle={deleteButtonStyles.label}
            icon={<DeleteIcon style={deleteButtonStyles.icon} />}
            onClick={() => props.onSubmit(props.id, 'delete')}
          />
        </Col>}
      </Row>


    </Col>
  </FormWrapper>
);


Location.propTypes = {
  id: React.PropTypes.string.isRequired,
  isAdmin: React.PropTypes.bool,
  showDeleteButton: React.PropTypes.bool,
};
Location = reduxForm({
  form: 'Location',
  enableReinitialize: true,
})(Location);
const mapStateToProps = (state) => ({
  initialValues: state.location,
  id: state.location._id,
});
export default connect(
  mapStateToProps,
  null,
  null,
  { withRef: true })(Location);
