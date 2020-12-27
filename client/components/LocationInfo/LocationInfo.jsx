import React from 'react';

class LocationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <h2>Name:</h2>
          <p>lorem namum</p>
        </div>
        <div>
          <h2>Address:</h2>
          <p>lorem addressum</p>
        </div>
      </div>
    );
  }
}

export default LocationInfo;
