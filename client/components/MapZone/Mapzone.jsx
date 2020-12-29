import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import L from 'leaflet';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    legendGet: (res) => dispatch({ type: 'mapzone/handleLegendGet', payload: res.data[0] }),
    handleLocationClick: (coords) => dispatch({ type: 'mapzone/handleLocationClick', payload: coords }),
    error: (err) => dispatch({ type: 'ErrorModal/showError', payload: err }),
  };
}

function mapStateToProps(state) {
  return {
    lat: state.mapReducer.lat,
    long: state.mapReducer.long,
  };
}

class Mapzone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 15,
      lastMarker: undefined,
      // map: undefined,
      coords: [],
    };
    this.onMapClick = this.onMapClick.bind(this);
    this.distributeMarkers = this.distributeMarkers.bind(this);
    this.markerClick = this.markerClick.bind(this);
    this.handleLegendGet = this.handleLegendGet.bind(this);
  }

  componentDidMount() {
    const here = this;
    const { zoom } = this.state;
    const { error, lat, long } = this.props;
    Axios.get('/allStories')
      .then((result) => {
        for (let i = 0; i < result.data.length; i += 1) {
          here.state.coords.push([result.data[i].latitude, result.data[i].longitude]);
        }
        here.setState({
          coords: here.state.coords,
        });
        const ghostMap = L.map('map-render-zone', {
          scrollWheelZoom: false,
        }).setView([lat, long], zoom);
        L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          },
        ).addTo(ghostMap);
        const mapClick = this.onMapClick;
        ghostMap.on('click', (event) => {
          mapClick(event, ghostMap);
        });
        this.distributeMarkers(ghostMap);
      })
      .catch((err) => {
        // needs alert
        error(err);
      });
  }

  /*
=====
  - click handlers and marker distribution
=====
  */
  onMapClick(event, map) {
    const { lastMarker } = this.state;
    const { handleLocationClick } = this.props;
    const newCoords = [event.latlng.lat, event.latlng.lng];
    if (lastMarker) {
      lastMarker.remove();
    }
    this.setState({
      lastMarker: L.marker(newCoords).addTo(map),
    });
    handleLocationClick(newCoords);
  }

  handleLegendGet(location) {
    const { error, legendGet } = this.props;
    let promise = Axios.get(`/locationInfo?lat=${location[0]}&lng=${location[1]}`);
    promise = promise.then((res) => {
      legendGet(res);
    })
      .catch((err) => {
        // needs alert
        error(err);
      });
    return promise;
  }

  distributeMarkers(map) {
    const { coords } = this.state;
    for (let i = 0; i < coords.length; i += 1) {
      L.marker(coords[i]).addTo(map).on('click', this.markerClick);
    }
  }

  markerClick(event) {
    const { lastMarker } = this.state;
    if (lastMarker) {
      lastMarker.remove();
      this.setState({
        lastMarker: undefined,
      });
    }
    const newCoords = [event.latlng.lat, event.latlng.lng];
    this.handleLegendGet(newCoords);
  }
  /*
=====
  - render
=====
  */

  render() {
    return (
      <div>
        <div id="map-render-zone" />
      </div>
    );
  }
}
Mapzone.propTypes = {
  handleLocationClick: PropTypes.func,
  error: PropTypes.func,
  lat: PropTypes.number,
  long: PropTypes.number,
  legendGet: PropTypes.func,
};
Mapzone.defaultProps = {
  handleLocationClick: undefined,
  error: undefined,
  lat: undefined,
  long: undefined,
  legendGet: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Mapzone);
