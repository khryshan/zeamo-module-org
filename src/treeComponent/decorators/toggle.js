import React from 'react';
import { Col } from 'react-styled-flexboxgrid';

import { ArrowDropDownIcon, ArrowDropUpIcon } from '../../icons';
const button = (node) => (node.toggled ?
  <ArrowDropDownIcon /> :
  <ArrowDropUpIcon />);
const Toggle = (props) => {
    return (
        <Col xs={4} style={props.style}>
            {props.node.children && props.node.children.length ?
              button(props.node) :
              null
            }
        </Col>
    );
};
export default Toggle;
