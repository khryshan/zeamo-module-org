import React, { Component } from 'react';
import { Treebeard } from 'react-treebeard';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import style from '../defaultStyles';
import decorators, { TYPE_COMPANY, TYPE_USER, TYPE_LOCATION, TYPE_GYM } from './decorators/';
import TreeForms from '../treeForms';


const parseUserNodes = (root) => {
  const users = root.users;
  return !Array.isArray(users) ? [] : users.map(user => ({
    _id: user._id,
    name: `${user.profile.name} ${user.profile.lastName}`,
    type: TYPE_USER,
    parentId: root._id,
  }));
}
const parseCompanyNodes = (root) => {
  const companies = root.companies;
  return !Array.isArray(companies) ? [] :
    companies.map(company => (Object.assign({}, company, { type: TYPE_COMPANY, parentId: root._id })));
}
const parseGymNodes = (root) => {
  const gyms = root.gyms;
  return !Array.isArray(gyms) ? [] :
    gyms.map(gym => (Object.assign({}, gym, { type: TYPE_GYM, parentId: root._id })));
}
const getAncestors = (parent) => {
  const ancestors = parent.ancestors.slice();
  ancestors.push(parent._id);
  return ancestors;
}
export const parseNode = (node, isRoot = false, parent) => {
  if(!node) return;
  if(node.parsed !== undefined && node.parsed) return node;
  if(!node.children) node.children = [];
  if(isRoot) {
    node.type = TYPE_COMPANY;
    node.parsed = true;
  } else {
    node.type = TYPE_LOCATION;
    node.ancestors = getAncestors(parent);
  }
  node.children = node.children.map(n => parseNode(n, false, node)).concat(parseGymNodes(node), parseCompanyNodes(node), parseUserNodes(node));
  return node;
}

export const findNodeParent = (id, node) => {
  if(node._id === id) return node;
  if(node.children && node.children.length){
    for (const child of node.children) {
      if(findNodeParent(id, child)) return findNodeParent(id, child);
    }
  }
  return null;
};

export default class OrganizationModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: parseNode(props.data, true)
    };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(node, toggled) {
    if (this.state.cursor) {
      this.state.cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    const parent = findNodeParent(node.parentId, this.state.items);
    this.setState({ cursor: node });
    if (this.props.onToggle) {
      this.props.onToggle(node, toggled, parent);
    }
  }
  componentWillReceiveProps(nextProps) {
    const { items } = this.state;
    this.setState({ items :  parseNode(nextProps.data, true) })
  }

  render() {
    const { cursor } = this.state;
    return (<Treebeard
      style={style}
      data={this.state.items}
      onToggle={this.onToggle}
      decorators={decorators}
    />);
  }
};
OrganizationModule.propTypes = {
  onToggle: React.PropTypes.func,
  data: React.PropTypes.object.isRequired,
};

export { TYPE_COMPANY, TYPE_USER, TYPE_LOCATION, TYPE_GYM, TreeForms };
