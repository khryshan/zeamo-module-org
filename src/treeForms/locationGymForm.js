import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { AssignForm } from './formsUI/';


let LocationGym = (props) => (
  <AssignForm
    data={props.gyms}
    dataSelected={props.gymsSelected}
    selected={props.locationGymsSelected}
    assigned={props.locationGyms}
    labelSearchAvailable="Available"
    labelSearchAssigned="Assigned"
    handleSearch={props.handleSearchGym}
    nameSelectAvailable="gyms"
    nameSelectAssigned="locationGyms"
    handleChange={props.handleSelectedGym}
    handleAddAll={props.handleAddAllGyms}
    handleAdd={props.handleAddGyms}
    handleRemove={props.handleRemoveGyms}
    handleRemoveAll={props.handleRemoveAllGyms}
  />
);


LocationGym.propTypes = {
  locationGyms: React.PropTypes.array,
  gyms: React.PropTypes.array,
  locationGymsSelected: React.PropTypes.array,
  gymsSelected: React.PropTypes.array,
  handleSearchGym: React.PropTypes.func,
  handleSelectedGym: React.PropTypes.func,
  handleAddGyms: React.PropTypes.func,
  handleAddAllGyms: React.PropTypes.func,
  handleRemoveGyms: React.PropTypes.func,
  handleRemoveAllGyms: React.PropTypes.func,
};
LocationGym = reduxForm({
  form: 'LocationGym',
  enableReinitialize: true,
})(LocationGym);
/*const mapStateToProps = (state) => ({
  initialValues: state.LocationGym,
});*/
export default connect(
  null,
  null,
  null,
  { withRef: true })(LocationGym);
