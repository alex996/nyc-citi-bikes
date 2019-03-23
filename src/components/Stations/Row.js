import React from 'react'
import PropTypes from 'prop-types'

// TS or Flow would make more sense, but this will do!
export const Station = {
  stationName: PropTypes.string.isRequired,
  availableDocks: PropTypes.number.isRequired,
  totalDocks: PropTypes.number.isRequired
}

const StationRow = ({ index, style, data }) => {
  const { stationName, availableDocks, totalDocks } = data[index]

  return (
    <div style={style}>
      {stationName} ({(availableDocks / totalDocks * 100).toFixed(2)}%)
    </div>
  )
}

StationRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape(Station)
  ).isRequired
}

StationRow.defaultProps = {
  index: 0,
  style: {},
  data: []
}

export default StationRow
