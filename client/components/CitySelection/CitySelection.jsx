import React from 'react';
import CityButtonPress from './CityButtonPress';

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
    const {
      cityLocationInput,
    } = this.state;
    return (
      <div>
        <label htmlFor="cityLocationInput">
          Where do you live?
          <input name="cityLocationInput" onChange={this.handleTextAreaChange} />
          <CityButtonPress
            cityLocationInput={cityLocationInput}
          />
        </label>
      </div>
    );
  }
}

export default CitySelection;
