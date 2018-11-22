import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import RaisedButton from 'material-ui/RaisedButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { userFormStyles, assignBarStyles as styles } from '../../defaultStyles';
import { LeftIcon, RightIcon } from '../../icons';


const AssignBar = ({ handleAddAll, handleAdd, itemSelected, handleRemove, handleRemoveAll, selected }) => (
<Col xs={1}>
  <Row around="xs" middle="xs">
    <Col xs={12} style={styles.firstRow}>
      <RaisedButton
        icon={<LeftIcon style={styles.icon} />}
        fullWidth
        onTouchTap={handleAddAll}
        buttonStyle={userFormStyles.submitButton}
      />
    </Col>
    <Col xs={12} style={styles.row}>
      <RaisedButton
        icon={<ChevronLeft style={styles.icon} />}
        fullWidth
        buttonStyle={userFormStyles.submitButton}
        onTouchTap={handleAdd}
      />
    </Col>
    <Col xs={12} style={styles.row}>
      <RaisedButton
        icon={<ChevronRight style={styles.icon} />}
        fullWidth
        onTouchTap={handleRemove}
        buttonStyle={userFormStyles.submitButton}
      />
    </Col>
    <Col xs={12}>
      <RaisedButton
        icon={<RightIcon style={styles.icon} />}
        fullWidth
        onTouchTap={handleRemoveAll}
        buttonStyle={userFormStyles.submitButton}
      />
    </Col>
  </Row>

</Col>);

export default AssignBar;
