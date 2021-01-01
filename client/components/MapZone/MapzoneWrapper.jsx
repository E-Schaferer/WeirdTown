import React from 'react';
import { useSelector } from 'react-redux';

import Mapzone from './Mapzone';

const MapzoneWrapper = () => {
  const mapZoneRender = useSelector((state) => state.renderReducer.mapZoneRender);
  return (
    <div test-id="mapzone-wrapper">
      {mapZoneRender ? (
        <div className="fade-in">
          <Mapzone />
        </div>
      ) : null}
    </div>
  );
};

export default MapzoneWrapper;
