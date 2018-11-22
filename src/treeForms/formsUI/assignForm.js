import React from 'react';
import { Col } from 'react-styled-flexboxgrid';
import AssignBar from './assignBar';
import SearchField from './searchField';
import SelectField from './selectField';
import FormWrapper from './formWrapper';

const AssignForm = ({ data, assigned, handleChange, handleSearch, handleAddAll, dataSelected,
  handleAdd, selected, handleRemove, handleRemoveAll, labelSearchAssigned,
  nameSelectAssigned, labelSearchAvailable, nameSelectAvailable }) => {
  const NonUsed = data.filter(item =>
    (!assigned.find(used => used && used._id === item._id)));
  return (
    <FormWrapper>
      <Col xs={5}>
        <SearchField label={labelSearchAssigned} onChange={handleSearch} />
        <SelectField name={nameSelectAssigned} handleChange={handleChange} data={assigned} />
      </Col>
      <AssignBar
        handleAddAll={handleAddAll}
        handleAdd={handleAdd}
        itemSelected={selected}
        selected={dataSelected}
        handleRemove={handleRemove}
        handleRemoveAll={handleRemoveAll}
      />
      <Col xs={6}>
        <SearchField label={labelSearchAvailable} onChange={handleSearch} />
        <SelectField name={nameSelectAvailable} handleChange={handleChange} data={NonUsed} />
      </Col>
    </FormWrapper>
  );
};
export default AssignForm;
