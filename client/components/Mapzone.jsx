import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import L from 'leaflet';

class Mapzone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 47.5707,
      long: -122.2221,
      zoom: 15,
      lastMarker: undefined,
      // map: undefined,
      coords: [],
    };
    this.onMapClick = this.onMapClick.bind(this);
    this.distributeMarkers = this.distributeMarkers.bind(this);
    this.markerClick = this.markerClick.bind(this);
  }

  /*
=====
  - initialization
=====
  */
  componentDidMount() {
    const here = this;
    const { lat, long, zoom } = this.state;
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
        console.log('Could not load map data, please reload the page');
        console.log(err);
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
    const { handleLegendGet } = this.props;
    const newCoords = [event.latlng.lat, event.latlng.lng];
    handleLegendGet(newCoords);
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
  handleLegendGet: PropTypes.func.isRequired,
  handleLocationClick: PropTypes.func.isRequired,
};

export default Mapzone;
