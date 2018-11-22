import React from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';

import { CompanyIcon, UserIcon, LocationIcon, GymIcon } from '../../icons';

import { disabledColor } from '../../defaultStyles';

export const TYPE_COMPANY = 'company';
export const TYPE_USER = 'user';
export const TYPE_LOCATION = 'location';
export const TYPE_GYM = 'gym';

const getIcon = (type) => {
  switch (type) {
    case TYPE_COMPANY:
      return CompanyIcon;
      break;
    case TYPE_USER:
      return UserIcon;
      break;
    case TYPE_LOCATION:
      return LocationIcon;
      break;
    case TYPE_GYM:
      return GymIcon;
      break;
    default:
      return LocationIcon;
  }
}
const Header = (props) => {
    //console.log(props)
    const Icon = getIcon(props.node.type);
    const style = {};
    if(props.node.isActive !== undefined && !props.node.isActive)
      style.fill = disabledColor;
    return (
      <Col xs={8} style={props.style.base}>
        <Row>
          <Col xs={2} style={props.style.icon}>
              <Icon style={style}/>
          </Col>
          <Col xs={10} style={props.style.title}>
              {props.node ? props.node.name : ''}
          </Col>
        </Row>
      </Col>
    );
};
export default Header;
