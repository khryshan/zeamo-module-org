import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';


import { CompanyIcon } from '../../icons';
import Toggle from './toggle';
import Header, { TYPE_COMPANY, TYPE_USER, TYPE_LOCATION, TYPE_GYM } from './header';
import Container from './container';
const decorators = {
    Loading: (props) => {
        return (
            <div style={props.style}>
                loading...
            </div>
        );
    },
    Toggle,
    Header,
    Container,
};
export { TYPE_COMPANY, TYPE_USER, TYPE_LOCATION, TYPE_GYM };
export default decorators;
