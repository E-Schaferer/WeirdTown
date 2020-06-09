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
      map: undefined,
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
        }).setView([this.state.lat, this.state.long], this.state.zoom);
        L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          },
        ).addTo(ghostMap);
        const mapClick = this.onMapClick;
        ghostMap.on('click', function(event) {
          mapClick(event, ghostMap);
        });
        this.distributeMarkers(ghostMap);
      })
      .catch((err) => {
        alert('Could not load map data, please reload the page');
        console.log(err);
      });
  }

  /*
=====
  - click handlers and marker distribution
=====
  */
  onMapClick(event, map) {
    const newCoords = [event.latlng.lat, event.latlng.lng];
    if (this.state.lastMarker) {
      console.log(this.state.lastMarker._latlng);
      map.removeLayer(this.state.lastMarker);
    }
    this.setState({
      lastMarker: new L.Marker(newCoords),
    });
    map.addLayer(this.state.lastMarker);
    this.props.handleLocationClick(newCoords);
  }

  distributeMarkers(map) {
    for (let i = 0; i < this.state.coords.length; i += 1) {
      L.marker(this.state.coords[i]).addTo(map).on('click', this.markerClick);
    }
  }

  markerClick(event) {
    const newCoords = [event.latlng.lat, event.latlng.lng];
    console.log(newCoords);
    this.props.handleLegendGet(newCoords);
  }
  /*
=====
  - render
=====
  */

  render() {
    return (
      <div>
        <div id="map-render-zone"></div>
      </div>
    );
  }
}

export default Mapzone;
