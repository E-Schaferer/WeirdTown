import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Mapzone from './Mapzone';

const MapzoneWrapper = ({ handleError }) => {
  const mapZoneRender = useSelector((state) => state.renderReducer.mapZoneRender);

  return (
    <div>
      {mapZoneRender ? (
        <Mapzone handleError={handleError} />
      ) : null}
    </div>
  );
};

MapzoneWrapper.propTypes = {
  handleError: PropTypes.func,
};
MapzoneWrapper.defaultProps = {
  handleError: undefined,
};

export default MapzoneWrapper;
