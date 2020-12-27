/* eslint-disable class-methods-use-this */
import React, { useState } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import AbsentStory from './AbsentStory/AbsentStory';
import PresentStory from './PresentStory/PresentStory';
import CurrentUser from './CurrentUser/CurrentUser';
import AuthBar from './AuthBar/AuthBar';
import Mapzone from './MapZone/Mapzone';
import CitySelection from './CitySelection/CitySelection';

class App extends React.Component {
  static handleError(funcName, err) {
    const promise = Axios.get(`/errorLog?funcname=${funcName}&err=${err}`);
    const result = promise.then(() => {});
    return 'result';
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.handleLegendGet = this.handleLegendGet.bind(this);
    this.storyFormSubmit = this.storyFormSubmit.bind(this);
    this.subStoryFormSubmit = this.subStoryFormSubmit.bind(this);
    this.handleUserData = this.handleUserData.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleUserError = this.handleUserError.bind(this);
  }

  /*
=====
  - error handling
=====
  */
  handleUserError(message) {
    useDispatch({
      type: '/ShowError',
      payload: message,
    });
  }

  // handleLegendGet(location) {
  //   let promise = Axios.get(`/locationInfo?lat=${location[0]}&lng=${location[1]}`);
  //   promise = promise.then((res) => {
  //     useDispatch({
  //       type: '/handleLegendGetData',
  //       payload: res.data[0],
  //     });
  //     useDispatch({
  //       type: '/handleLegendGetRender',
  //     });
  //   })
  //     .catch((err) => {
  //     // needs alert
  //       App.handleError('handleLegendGet', err);
  //     });
  //   return promise;
  // }

  // storyFormSubmit(name, loc, saw, heard, story) {
  //   const { lastMarker } = this.state;
  //   const promise = Axios.post('/storySubmit', {
  //     story,
  //     name,
  //     loc,
  //     saw,
  //     heard,
  //     lat: lastMarker[0],
  //     lng: lastMarker[1],
  //   });
  //   const result = promise.then(() => {
  //     // needs alert
  //     window.location.reload(true);
  //   });
  //   const catcher = promise.catch((err) => {
  //     App.handleError(['storyFormSubmit', err]);
  //   });
  //   return result || catcher;
  // }

  /*
=====
  - sub story form functions
=====
  */

  // subStoryFormSubmit(name, loc, heard, saw, story) {
  //   const { currentStory } = this.state;
  //   const promise = Axios.post('/subStorySubmit', {
  //     id: currentStory.id,
  //     name,
  //     location: loc,
  //     heard,
  //     saw,
  //     story,
  //   });
  //   const result = promise.then(() => {
  //     // needs alert
  //     window.location.reload(true);
  //   });
  //   const catcher = promise.catch((err) => {
  //     App.handleError(['subStoryFormSubmit', err]);
  //   });
  //   return result || catcher;
  // }

  /*
=====
  - text area change handler
=====
  */

  // handleTextAreaChange(event) {
  //   const { id, value } = event.target;
  //   this.setState({
  //     [id]: value,
  //   });
  // }

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
    const citySelected = useSelector((state) => state.citySelected);
    const absentStoryRender = useSelector((state) => state.absentStoryRender);
    const presentStoryRender = useSelector((state) => state.presentStoryRender);
    return (
      <div>
        <div id="auth-zone">
          <CurrentUser handleUserData={this.handleUserData} handleError={App.handleError} />
          <AuthBar />
        </div>
        {!citySelected
          ? (
            <CitySelection
              handleTextAreaChange={this.handleTextAreaChange}
            />
          )
          : (
            <div>
              <div id="title-zone">
                <div id="title-zone-inner">
                  <h1>
                    My
                    {' '}
                    <span className="redacted">Weird</span>
                    {' '}
                    Normal Town
                  </h1>
                </div>
              </div>
              <div id="map-zone">
                <Mapzone
                  handleLegendGet={this.handleLegendGet}
                  handleError={App.handleError}
                />
              </div>
              <div>
                {absentStoryRender
                  ? (
                    <div id="absent-story">
                      <div id="absent-story-inner">
                        <AbsentStory
                          storyFormSubmit={this.storyFormSubmit}
                          handleTextAreaChange={this.handleTextAreaChange}
                          handleUserError={this.handleUserError}
                        />
                      </div>
                    </div>
                  )
                  : null}
              </div>
              <div>
                {presentStoryRender
                  ? (
                    <div id="present-story">
                      <div id="present-story-flex">
                        <div className="flex-center">
                          <PresentStory
                            subStoryFormSubmit={this.subStoryFormSubmit}
                            handleTextAreaChange={this.handleTextAreaChange}
                            handleError={App.handleError}
                            handleUserError={this.handleUserError}
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default App;
