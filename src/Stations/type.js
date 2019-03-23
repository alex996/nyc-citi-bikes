import PropTypes from 'prop-types'

// TS or Flow would make more sense, but this will do!
const Station = {
  id: PropTypes.number.isRequired,
  stationName: PropTypes.string.isRequired,
  availableDocks: PropTypes.number.isRequired,
  totalDocks: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  lastCommunicationTime: PropTypes.string
}

export default Station
