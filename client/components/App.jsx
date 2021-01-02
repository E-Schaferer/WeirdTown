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
      <div className="render-grid">
        <div id="error-modal">
          <ErrorModal />
        </div>
        <div className="flex to-end">
          <div id="authentication" className="grid-row1 grid-col3 flex column centered content-background white margin-5">
            <CurrentUser />
            <AuthBar />
          </div>
        </div>
        <div id="city-input" className="grid-row2 grid-col2 flex centered fade-in">
          <CitySelection />
        </div>
        <div id="site-name" className="grid-row1 grid-col2 flex white centered">
          <h1 className="content-background">Weird Town</h1>
        </div>
        <map id="map-zone" className="grid-row2 grid-col1_4">
          <MapzoneWrapper />
        </map>
        <div id="absent-story" className="grid-row3 grid-col1_4">
          <AbsentStory />
        </div>
        <div id="present-story" className="grid-row3 grid-col1_4">
          <PresentStory />
        </div>
      </div>
    );
  }
}

export default App;
