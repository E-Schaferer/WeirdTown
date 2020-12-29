/* eslint-disable class-methods-use-this */
import React from 'react';

import AbsentStory from './AbsentStory/AbsentStory';
import PresentStory from './PresentStory/PresentStory';
import CurrentUser from './CurrentUser/CurrentUser';
import AuthBar from './AuthBar/AuthBar';
import MapzoneWrapper from './MapZone/MapzoneWrapper';
import CitySelection from './CitySelection/CitySelection';
import ErrorModal from './ErrorModal/ErrorModal';

class App extends React.Component {
  /*
=====
  - user data
=====
  */

  handleUserData() {
    // need to actually do things with user data
    this.setState({});
  }

  /*
=====
  - render
=====
  */
  render() {
    return (
      <div>
        <div>
          <ErrorModal />
        </div>
        <div>
          <CurrentUser />
          <AuthBar />
        </div>
        <CitySelection />
        <div>
          <h1>
            My
            {' '}
            <span className="redacted">Weird</span>
            {' '}
            Normal Town
          </h1>
          <div>
            <MapzoneWrapper />
            <div>
              <AbsentStory />
            </div>
            <div className="flex-center">
              <PresentStory />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
