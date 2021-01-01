import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import CityButtonPress from './CityButtonPress';

const mapStateToProps = (state) => ({
  cityLocationInputRender: state.renderReducer.cityLocationInputRender,
});

class CitySelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityLocationInput: '',
    };
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleTextAreaChange(event) {
    const { value } = event.target;
    this.setState({
      cityLocationInput: value,
    });
  }

  render() {
    const { cityLocationInput } = this.state;
    const { cityLocationInputRender } = this.props;
    return (
      <div>
        {cityLocationInputRender ? (
          <label htmlFor="cityLocationInput" className="flex centered column content-background">
            <p className="white">Where do you live?</p>
            <input name="cityLocationInput" onChange={this.handleTextAreaChange} />
            <CityButtonPress
              cityLocationInput={cityLocationInput}
            />
          </label>
        ) : null}
      </div>
    );
  }
}

CitySelection.propTypes = {
  cityLocationInputRender: propTypes.bool,
};
CitySelection.defaultProps = {
  cityLocationInputRender: false,
};

export default connect(mapStateToProps)(CitySelection);
