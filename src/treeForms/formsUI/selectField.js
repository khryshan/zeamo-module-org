import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

const SelectField = ({ data, name, handleChange }) => (<Row>
  <Col xs={12}>
    <select
      multiple
      data-type={0}
      name={name}
      style={{ width: '100%', height: '40vh' }}
      onChange={handleChange}
    >
    {data.map((item, i) =>
      item ? <option
        key={item._id}
        style={{ padding: '10px 0px 10px 20px', fontSize: '16px' }}
        value={item._id}
        title={item.title}
        selected={item.selected}
      >
        {(!item.subName) ? item.name : `${item.name} - ${item.subName}`}
      </option> : null
    )}
    </select>
  </Col>
</Row>);

export default SelectField;
