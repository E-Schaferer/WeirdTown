import React from 'react';
import { useSelector } from 'react-redux';

import Mapzone from './Mapzone';

const MapzoneWrapper = () => {
  const mapZoneRender = useSelector((state) => state.renderReducer.mapZoneRender);
  return (
    <div test-id="mapzone-wrapper">
      {mapZoneRender ? (
        <Mapzone />
      ) : null}
    </div>
  );
};

export default MapzoneWrapper;
