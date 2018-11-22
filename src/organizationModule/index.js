import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Paper from 'material-ui/Paper';
import { Provider } from 'react-redux';

import store from './store';
import { load } from './location';
import TreeFull from './treeFull';
import { TYPE_LOCATION, TYPE_USER, TYPE_GYM,
  TYPE_COMPANY, parseNode } from '../treeComponent';
import TreeForms, { TAB_USERS, TAB_LOCATION,
  TAB_GYMS, TAB_COMPANY, TAB_CHILD } from '../treeForms';

const tabsIndexes = {
  [TYPE_USER]: TAB_USERS,
  [TYPE_LOCATION]: TAB_LOCATION,
  [TYPE_GYM]: TAB_GYMS,
  [TYPE_COMPANY]: TAB_COMPANY,
};

class OrganizationModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
    this.onToggle = this.onToggle.bind(this);
  }
  componentDidMount() {
    const selectDefault = () => store.dispatch(load(this.props.data));
    selectDefault();
    if(this.props.handleSelectDefault) {
      this.props.handleSelectDefault(selectDefault);
    }

  }
  onToggle(node, t, parent){
    const { dispatch } = this.props;
    store.dispatch(load(node.type === TYPE_LOCATION
      || node.parsed ? node : parent));
    const selectedTab = !node.parsed ? tabsIndexes[node.type] || TAB_LOCATION : TAB_LOCATION;

    this.setState({ selectedTab });
  }
  render() {
    const { selectedTab } = this.state;
    return (<Provider store={store}>
      <Grid style={this.props.style}>
      <Row>
        <Col xs={4}>
          <TreeFull
            data={this.props.data}
            onToggle={this.onToggle}
          />
        </Col>
        <Col xs={8}>
          {Boolean(this.props.data) &&
            <TreeForms
              handleSubmit={this.props.handleSubmit}
              users={this.props.users}
              companies={this.props.companies}
              gyms={this.props.gyms}
              selectedTab={selectedTab}
              isAdmin={this.props.isAdmin}
              showDeleteButton={this.props.showDeleteButton}
              handleSearchGym={this.props.handleSearchGym}
              handleSearchUser={this.handleSearchUsers}
            />
          }
        </Col>
      </Row>
    </Grid>
  </Provider>);
  }
};
OrganizationModule.propTypes = {
  onToggle: React.PropTypes.func,
  data: React.PropTypes.object.isRequired,
  style: React.PropTypes.object,
  isAdmin: React.PropTypes.bool,
  showDeleteButton: React.PropTypes.bool,
  handleSubmit: React.PropTypes.func.isRequired,
  handleSelectDefault: React.PropTypes.func,
};
const mapStateToProps = (state) => ({
  location: state.location,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationModule);


export { TreeFull, TAB_USERS, TAB_LOCATION,
  TAB_GYMS, TAB_COMPANY, TAB_CHILD, OrganizationModule as OrganizationNoRedux, parseNode };
