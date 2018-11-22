import React, { Component } from 'react';
import { isValid, reset, isPristine } from 'redux-form';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';

import { muiTheme, treeFormsStyles as style, primaryButtonLabelColor } from '../defaultStyles';
import LocationForm from './locationForm';
import LocationChildForm from './locationChildForm';
import LocationUsersForm from './locationUsersForm';
import LocationGymForm from './locationGymForm';
import { SearchField } from './formsUI';
import { load } from '../organizationModule/location';

export const TAB_LOCATION = 0;
export const TAB_CHILD = 1;
export const TAB_GYMS = 2;
export const TAB_COMPANY = 2;
export const TAB_USERS = 3;

class TreeForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      gyms: this.parseCompaniesOrGyms(props.gyms || props.companies),
      gymsSelected: [],
      locationGyms: [],
      locationGymsSelected: [],
      locationUsers: [],
      locationUsersSelected: [],
      users: props.users ? this.parseUsers(props.users) : [],
      usersSelected: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleAddAll = this.handleAddAll.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleAddUsers = this.handleAddUsers.bind(this);
    this.handleAddAllUsers = this.handleAddAllUsers.bind(this);
    this.handleRemoveAllUsers = this.handleRemoveAllUsers.bind(this);
    this.handleRemoveUsers = this.handleRemoveUsers.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleSearchUsers = this.handleSearchUsers.bind(this);
    this.handleSearchGymOrCompanies = this.handleSearchGymOrCompanies.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(load({}));
  }
  componentWillReceiveProps(nextProps) {
    const difference = _.reduce(this.props,(result, value, key) => _.isEqual(value, nextProps[key]) ?
        result : result.concat(key), []);
    if(difference.length === 1 && difference[0].indexOf('valid') !== -1 ) return;
    if (nextProps.location && nextProps.location.users
      && (nextProps.location.companies || nextProps.location.gyms)) {
      const collection = nextProps.isAdmin ? nextProps.location.companies : nextProps.location.gyms;
      this.setState({ locationUsers: this.parseUsers(nextProps.location.users),
        locationGyms: this.parseCompaniesOrGyms(collection) })
    }

    if(nextProps.selectedTab !== undefined) {
      this.handleChange(nextProps.selectedTab);
    }
    if(nextProps.users) {
      this.setState({ users: this.parseUsers(nextProps.users) })
    }
    if(nextProps.gyms || nextProps.companies) {
      this.setState({ gyms: this.parseCompaniesOrGyms(nextProps.gyms || nextProps.companies) })
    }
  }
  parseUsers(users){
    return users.map(u => ({ name: u.profile.name, _id: u._id, title: u.email }));
  }
  parseCompaniesOrGyms(collection){
    return collection.map(u => ({ name: u.name, subName: u.subName, _id: u._id }));
  }
  handleChange(slideIndex) {
    this.setState({ slideIndex });
  }
  handleSelected(e) {
    const options = e.target.options;
    const value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push({ _id: options[i].value, name: options[i].label, title: options[i].title});
      }
    }
    this.setState({ [`${e.target.name}Selected`]: value });

  }
  handleAdd(e, selected = this.state.gymsSelected, key = 'locationGyms') {
    const val = this.state[key].concat(selected).map(o => { delete o.selected; return o; });
    this.setState({
      [key]: _.uniqWith(val, _.isEqual),
      users: this.parseUsers(this.props.users),
      gyms: this.parseCompaniesOrGyms(this.props.gyms || this.props.companies),
     });
  }
  handleAddAll(e, key='gyms', collection) {
    this.handleAdd(null, this.state[key], collection);
    this.setState({ [`location${_.capitalize(key)}Selected`]: [] });
  }
  handleRemove(e, collection = 'locationGyms', selected = 'locationGymsSelected') {
    const val = this.state[collection].filter((obj) =>
      !this.state[selected].find(s => s._id === obj._id));
    this.setState({ [collection]: val });
  }
  handleRemoveAll(e, key = 'locationGyms') {
    this.setState({ [key]: [], [`${key}Selected`]: []  });
  }
  handleAddUsers(){
    this.handleAdd(null, this.state.usersSelected, 'locationUsers')
  }
  handleAddAllUsers(){
    this.handleAddAll(null, 'users', 'locationUsers');
  }
  handleRemoveUsers(){
    this.handleRemove(null, 'locationUsers', 'locationUsersSelected')
  }
  handleRemoveAllUsers(){
    this.handleRemoveAll(null, 'locationUsers');
  }
  getIdsArray(collection){
    return collection.map(i => i._id);
  }
  resetForm(name = 'LocationChild') {
    console.info("reseting", name)
    this.props.dispatch(reset(name));
  }
  filterUsers(value, data){
    const result = [];
    value = value.toLowerCase();
    data.forEach(u => {
      u.selected = (u.title && u.title.toLowerCase().indexOf(value) !== -1) ||
        (u.name && u.name.toLowerCase().indexOf(value) !== -1);
      if (u.selected) result.push(u);
    });
    return result;
  }
  handleSearchUsers(e, field, value){
    if(field === 'Users'){
      let users =  this.parseUsers(this.props.users).slice();
      let usersSelected = [];
      if(value) {
        usersSelected = this.filterUsers(value, users);
      }
      this.setState({ users, usersSelected });
    } else if( field === 'Assigned') {
      let locationUsers = this.state.locationUsers.slice();
      let locationUsersSelected = [];
      if (value) {
        locationUsersSelected = this.filterUsers(value, locationUsers);
      }
      this.setState({ locationUsers, locationUsersSelected });
    }
  }
  filterCompaniesOrGyms(value, data){
    const result = [];
    value = value.toLowerCase();
    data.forEach(u => {
      u.selected = (u.name && u.name.toLowerCase().indexOf(value) !== -1);
      if (u.selected) result.push(u);
    });
    return result;
  }
  handleSearchGymOrCompanies(e, field, value){
    if(field === 'Available'){
      let gyms =  this.parseCompaniesOrGyms(this.props.gyms || this.props.companies).slice();
      let gymsSelected = [];
      if(value) {
        gymsSelected = this.filterCompaniesOrGyms(value, gyms);
      }
      this.setState({ gyms, gymsSelected });
    } else if( field === 'Assigned') {
      let locationGyms = this.state.locationGyms.slice();
      let locationGymsSelected = [];
      if (value) {
        locationGymsSelected = this.filterCompaniesOrGyms(value, locationGyms);
      }
      this.setState({ locationGyms, locationGymsSelected });
    }
  }
  handleSubmit(values, type){
    const { location, isAdmin, dispatch } = this.props;
    const { slideIndex } = this.state;
    let val = { ancestors: values.ancestors || location.ancestors, parent: values.parent || location._id };
    let resetForm = this.resetForm;
    switch (slideIndex) {
      case TAB_USERS:
        val = { users: this.getIdsArray(this.state.locationUsers) };
        break;
      case TAB_GYMS:
        const key = isAdmin ? 'companies' : 'gyms';
        val = { [key]: this.getIdsArray(this.state.locationGyms) };
        break;
      case TAB_LOCATION:
        val = Object.assign({}, val, { name: values.name, isActive: values.isActive,
          description: values.description });
        resetForm = () => dispatch(load({}));
        break;
      case TAB_CHILD:
        val = Object.assign({}, val, values);
        break;
      default:
        console.log(values);
    }
    this.props.handleSubmit(location._id, val, slideIndex, resetForm, type);
  }
  handleSave() {
    const forms = [this.refs.locationForm, this.refs.LocationChildForm,
      this.refs.locationGymForm, this.refs.LocationUsersForm];
    if (this.state.slideIndex < forms.length) {
      forms[this.state.slideIndex].getWrappedInstance().submit();
    }
  }

  render(){
    const { valid, validChild, showDeleteButton } = this.props;
    const { locationUsers } = this.state;
    let disabled = false;
    if (this.state.slideIndex === TAB_LOCATION) {
      disabled = !valid;
    } else if (this.state.slideIndex === TAB_CHILD) {
      disabled = !validChild;
    }
    const actions = [
      <FlatButton
        key={0}
        label="Cancel"
        style={style.cancelButton}
        primary
      />,
      <RaisedButton
        key={1}
        labelColor={primaryButtonLabelColor}
        label={this.state.slideIndex === 1 ? 'Add' : 'Save'}
        buttonStyle={style.submitButton}
        disabled={disabled}
        onClick={() => this.handleSave()}
      />,
    ];
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <Paper style={{ height: '79.5vh' }} zDepth={1}>
            <Tabs
              onChange={this.handleChange}
              value={this.state.slideIndex}
              inkBarStyle={{ backgroundColor: '#4877f9' }}
            >
              <Tab label="Edit" value={TAB_LOCATION} />
              <Tab label="Add Child" value={TAB_CHILD} />
              {!this.props.isAdmin ?
                <Tab label="Add Gym" value={TAB_GYMS} /> :
                <Tab label="Add Company" value={TAB_COMPANY} />}
              <Tab label="Add Users" value={TAB_USERS} />
            </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div style={style.slide}>
              <LocationForm
                ref="locationForm"
                onSubmit={this.handleSubmit}
                id={this.props.location._id}
                isAdmin={this.props.isAdmin}
                showDeleteButton={showDeleteButton}
              />
            </div>
            <div style={style.slide}>
              <LocationChildForm
                ref="LocationChildForm"
                onSubmit={this.handleSubmit}
                id={this.props.location._id}
              />
            </div>
            <div style={style.slide}>
              <LocationGymForm
                ref="locationGymForm"
                locationGyms={this.state.locationGyms}
                locationGymsSelected={this.state.locationGymsSelected}
                gymsSelected={this.state.gymsSelected}
                gyms={this.state.gyms}
                onSubmit={this.handleSubmit}
                handleSearchGym={this.handleSearchGymOrCompanies}
                handleSelectedGym={this.handleSelected}
                handleAddGyms={this.handleAdd}
                key={JSON.stringify(this.state.locationGyms)}
                handleAddAllGyms={this.handleAddAll}
                handleRemoveGyms={this.handleRemove}
                handleRemoveAllGyms={this.handleRemoveAll}
                id={this.props.location._id}
              />
            </div>
            <div style={style.slide}>
              <LocationUsersForm
                ref="LocationUsersForm"
                locationUsers={locationUsers}
                locationUsersSelected={this.state.locationUsersSelected}
                onSubmit={this.handleSubmit}
                id={this.props.location._id}
                users={this.state.users}
                key={JSON.stringify(locationUsers)}
                usersSelected={this.state.usersSelected}
                handleSelectedUser={this.handleSelected}
                handleSearchUser={this.handleSearchUsers}
                handleAddUsers={this.handleAddUsers}
                handleAddAllUsers={this.handleAddAllUsers}
                handleRemoveUsers={this.handleRemoveUsers}
                handleRemoveAllUsers={this.handleRemoveAllUsers}
              />
            </div>
          </SwipeableViews>
          <div style={style.buttons}>
            <Row>
              <Col xs={12}>
                <Row end="xs">
                  <Col xs={6}>
                    {actions}
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Paper>
    </MuiThemeProvider>
    );
  }
};
TreeForms.propTypes = {
  selectedTab: React.PropTypes.number,
  isAdmin: React.PropTypes.bool,
  showDeleteButton: React.PropTypes.bool,
  handleSubmit: React.PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  location: state.location,
  valid: isValid('Location')(state),
  validChild: isValid('LocationChild')(state) && !isPristine('LocationChild')(state),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(TreeForms);

export { SearchField };
