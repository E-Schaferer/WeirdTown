import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Mapzone from './Mapzone';

const MapzoneWrapper = (props) => {
  const mapZoneRender = useSelector((state) => state.renderReducer.mapZoneRender);
  const { handleError } = props;
  return (
    <div>

      {mapZoneRender ? (
        <Mapzone handleError={handleError} />
      ) : (null)}
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
