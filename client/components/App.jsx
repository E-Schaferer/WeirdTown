/* eslint-disable class-methods-use-this */
import React from 'react';
import Axios from 'axios';

import AbsentStory from './AbsentStory/AbsentStory';
import PresentStory from './PresentStory/PresentStory';
import CurrentUser from './CurrentUser/CurrentUser';
import AuthBar from './AuthBar/AuthBar';
import MapzoneWrapper from './MapZone/MapzoneWrapper';
import CitySelection from './CitySelection/CitySelection';

class App extends React.Component {
  static handleError(funcName, err) {
    Axios.get(`/errorLog?funcname=${funcName}&err=${err}`);
    return 'result';
  }

  constructor(props) {
    super(props);
    this.handleUserData = this.handleUserData.bind(this);
    this.handleUserError = this.handleUserError.bind(this);
  }

  /*
=====
  - error handling
=====
  */
  handleUserError() {
    // this.dispatch({
    //   type: '/ShowError',
    //   payload: message,
    // });
  }

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
          <CurrentUser handleUserData={this.handleUserData} handleError={App.handleError} />
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
            <MapzoneWrapper
              handleError={App.handleError}
            />
            <div>
              <AbsentStory
                handleError={App.handleError}
                handleUserError={this.handleUserError}
              />
            </div>
            <div className="flex-center">
              <PresentStory
                handleError={App.handleError}
                handleUserError={this.handleUserError}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
