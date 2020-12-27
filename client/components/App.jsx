/* eslint-disable class-methods-use-this */
import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import AbsentStory from './AbsentStory/AbsentStory';
import PresentStory from './PresentStory/PresentStory';
import CurrentUser from './CurrentUser/CurrentUser';
import AuthBar from './AuthBar/AuthBar';
import Mapzone from './MapZone/Mapzone';
import CitySelection from './CitySelection/CitySelection';

class App extends React.Component {
  static handleError(funcName, err) {
    const promise = Axios.get(`/errorLog?funcname=${funcName}&err=${err}`);
    const result = promise.then(() => { });
    return 'result';
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.handleUserData = this.handleUserData.bind(this);
    this.handleUserError = this.handleUserError.bind(this);
  }

  /*
=====
  - error handling
=====
  */
  handleUserError(message) {
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

  handleUserData(data) {
    // need to actually do things with user data
    this.setState({});
  }

  /*
=====
  - render
=====
  */
  render() {
    const {
      citySelected,
      absentStoryRender,
      presentStoryRender,
    } = this.props;
    return (
      <div>
        <div>
          <CurrentUser handleUserData={this.handleUserData} handleError={App.handleError} />
          <AuthBar />
        </div>
        {
          !citySelected
            ? (
              <CitySelection />
            )
            : (
              <div>
                <h1>
                  My
                  {' '}
                  <span className="redacted">Weird</span>
                  {' '}
                  Normal Town
                </h1>
                <div>
                  <Mapzone
                    handleError={App.handleError}
                  />
                  {absentStoryRender
                    ? (
                      <div>
                        <AbsentStory
                          handleUserError={this.handleUserError}
                        />
                      </div>
                    )
                    : null}
                  {presentStoryRender
                    ? (
                      <div className="flex-center">
                        <PresentStory
                          handleError={App.handleError}
                          handleUserError={this.handleUserError}
                        />
                      </div>
                    ) : null}
                </div>

              </div>
            )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    citySelected: state.citySelected,
    absentStoryRender: state.absentStoryRender,
    presentStoryRender: state.presentStoryRender,
  };
}

export default connect(mapStateToProps)(App);
