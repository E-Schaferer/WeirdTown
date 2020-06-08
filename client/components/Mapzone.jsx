import React from 'react';
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
    };
    this.onMapClick = this.onMapClick.bind(this);
    this.distributeMarkers = this.distributeMarkers.bind(this);
    this.markerClick = this.markerClick.bind(this);
  }

  componentDidMount() {
    let ghostMap = L.map('map-render-zone').setView([this.state.lat, this.state.long], this.state.zoom);
    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      },
    ).addTo(ghostMap);
    const mapClick = this.onMapClick;
    ghostMap.on('click', function(event) {
      mapClick(event, ghostMap);
    });
    this.distributeMarkers(ghostMap);
  }

  onMapClick(event, map) {
    const newCoords = [event.latlng.lat, event.latlng.lng];
    if (this.state.lastMarker) {
      console.log(this.state.lastMarker);
      L.marker(this.state.lastMarker).removeFrom(map);
    }
    L.marker(newCoords).addTo(map).on('click', this.markerClick);
    this.setState({ lastMarker: newCoords });
    this.props.handleLocationClick(newCoords);
  }

  distributeMarkers(map) {
    const p = this.props;
    for (let i = 0; i < p.coords.length; i += 1) {
      L.marker(p.coords[i]).addTo(map).on('click', this.markerClick);
    }
  }

  markerClick(event) {
    console.log(event.latlng);
    this.props.handleLegendGet(event.latlng);
  }

  render() {
    return (
      <div id="map-render-zone"></div>
    );
  }
}

export default Mapzone;
