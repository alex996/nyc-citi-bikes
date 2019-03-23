import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../Utils'
import Station from './type'

const StationPane = ({ className, height, station, width }) => (
  <Box style={{ height, width }}>
    <ul className={className}>
      <li>
        <strong>Name:</strong> <span>{station.stationName}</span>
      </li>
      <li>
        <strong>Available:</strong> <span>{station.availableDocks}</span>
      </li>
      <li>
        <strong>Total:</strong> <span>{station.totalDocks}</span>
      </li>
      <li>
        <strong>Latitude:</strong> <span>{station.latitude}</span>
      </li>
      <li>
        <strong>Longitude:</strong> <span>{station.longitude}</span>
      </li>
      <li>
        <strong>Updated:</strong> <span>{station.lastCommunicationTime}</span>
      </li>
    </ul>
  </Box>
)

StationPane.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  station: PropTypes.shape(Station),
  width: PropTypes.number
}

StationPane.defaultProps = {
  className: 'station-pane',
  height: 200,
  station: {},
  width: 400
}

export default StationPane
