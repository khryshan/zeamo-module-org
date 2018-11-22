import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import { containerDialogTab } from '../../defaultStyles';

const FormWrapper = ({ children }) => (<div style={containerDialogTab}>
  <Row>
    {children}
  </Row>
</div>);
export default FormWrapper;
