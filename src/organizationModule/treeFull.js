import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Paper from 'material-ui/Paper';
import Tree from '../treeComponent';
import { SearchField } from '../treeForms';
import * as filters from './filter';

export default class TreeFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
    this.handleFilter = this.handleFilter.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data })
  }
  handleFilter(e, a, value = '') {
    const filter = value.trim();
    if (!filter) {
      return this.setState({ listItems: this.props.data });
    }
    let filtered = filters.filterTree(this.props.data, filter);
    filtered = filters.expandFilteredNodes(filtered, filter);
    return this.setState({ data: filtered, filter });
  }
  render(){
    const { data, ...extra } = this.props;
    return (
      <Paper style={{ height: '79.5vh', overflow: 'auto', whiteSpace: 'nowrap' }} zDepth={1}>
        <Col xs={12} style={{ padding: '10px' }}>
          <SearchField onlyInput label="search" onChange={this.handleFilter} />
        </Col>
        <Col xs={12}>
          <Tree data={this.state.data} {...extra} />
        </Col>
      </Paper>

    );
  }
};
TreeFull.propTypes = {
  onToggle: React.PropTypes.func,
  data: React.PropTypes.object.isRequired,
};
