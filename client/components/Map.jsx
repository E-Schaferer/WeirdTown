import React from 'react';
import Axios from 'axios';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class Mapzone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 47.5707,
      long: -122.2221,
      zoom: 15,
    };
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMapClick(event) {
    console.log(event.latlng);
  }

  render() {
    return (
      <Map
        center={[this.state.lat, this.state.long]}
        zoom={[this.state.zoom]}
        style={{ width: '100%', height: '400px' }}
        onClick={this.onMapClick}
      >
        <TileLayer
          url= "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        >
        </TileLayer>
      </Map>
    );
  }
}

export default Mapzone;
