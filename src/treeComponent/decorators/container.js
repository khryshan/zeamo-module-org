import React from 'react';
import { Row } from 'react-styled-flexboxgrid';

const Container =  (props) => {
  //console.log(props)
    return (
        <Row onClick={props.onClick} style={Object.assign({}, props.style.base, props.node.active ? props.style.baseActive : {})}>
            <props.decorators.Header  {...props} style={props.style.header} />
            <props.decorators.Toggle {...props} style={props.style.toggle} />
        </Row>
    );
};
export default Container;
