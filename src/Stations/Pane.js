import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../Utils'
import Station from './type'

const props = {
  stationName: 'Name',
  availableDocks: 'Available',
  totalDocks: 'Total',
  latitude: 'Latitude',
  longitude: 'Longitude',
  lastCommunicationTime: 'Updated'
}

const StationPane = ({ className, height, station, width }) => (
  <Box style={{ height, width }}>
    {station && (
      <ul className={className}>
        {Object.entries(props).map(([prop, label]) => (
          <li key={prop}>
            <strong>{label}</strong> <span>{station[prop]}</span>
          </li>
        ))}
      </ul>
    )}
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
  station: null,
  width: 400
}

export default StationPane
