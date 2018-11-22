import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-styled-flexboxgrid';
import TextField from 'redux-form-material-ui/lib/TextField';
import Search from 'material-ui/svg-icons/action/search';

import { searchFieldStyles as styles } from '../../defaultStyles'


class SearchField extends Component {
  constructor(props) {
    super(props);
    this.filterValueTimer = undefined;
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(event, newValue) {
    clearTimeout(this.filterValueTimer);
    this.filterValueTimer = setTimeout(() => {
      this.props.onChange(event, this.props.label, newValue);
    }, 700);
  }
  render() {
    const { label, onChange, onlyInput } = this.props;
    const SearchInput = (<div style={styles.wrapper}>
      <Search style={styles.icon} />
      <TextField
        hintText={label}
        fullWidth
        inputStyle={styles.input}
        hintStyle={styles.input}
        onChange={this.handleSearch}
      />
    </div>);
    const Wrapper = (<div>
      <Row>
        <Col xs={12}>
          <p style={styles.label}>{label}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          {SearchInput}
        </Col>
      </Row>
    </div>);
    return ( onlyInput ? SearchInput : Wrapper );
  }
}
SearchField.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired,
  onlyInput: React.PropTypes.bool,
};

export default SearchField;
