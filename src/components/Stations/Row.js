import React from 'react'
import PropTypes from 'prop-types'

// TS or Flow would make more sense, but this will do!
export const Station = {
  stationName: PropTypes.string.isRequired,
  availableDocks: PropTypes.number.isRequired,
  totalDocks: PropTypes.number.isRequired
}

const StationRow = ({ className, index, style, data }) => {
  const { stationName, availableDocks, totalDocks } = data[index]

  return (
    <div className={className} style={style}>
      <span>{stationName}</span>
      <span>{(availableDocks / totalDocks * 100).toFixed(2)}%</span>
    </div>
  )
}

StationRow.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape(Station)
  ).isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object
}

StationRow.defaultProps = {
  className: 'station-row',
  data: [],
  index: 0,
  style: {}
}

export default StationRow
