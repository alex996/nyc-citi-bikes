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

const StationPane = ({ className, station }) => (
  <Box className={className}>
    {station && (
      <ul>
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
  station: PropTypes.shape(Station)
}

StationPane.defaultProps = {
  className: 'station-pane',
  station: null
}

export default StationPane
