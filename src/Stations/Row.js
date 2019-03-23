import React from 'react'
import PropTypes from 'prop-types'
import Station from './type'

const StationRow = ({ className, data: { stations, onMouseOver }, index, style }) => {
  const { id, stationName, availableDocks, totalDocks } = stations[index]

  return (
    <div data-id={id} className={className} style={style} onMouseOver={onMouseOver}>
      <span>{stationName}</span>
      <span>{(availableDocks / totalDocks * 100).toFixed(2)}%</span>
    </div>
  )
}

StationRow.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    stations: PropTypes.arrayOf(
      PropTypes.shape(Station)
    ).isRequired,
    onMouseOver: PropTypes.func
  }).isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object
}

StationRow.defaultProps = {
  className: 'station-row',
  data: {
    stations: [],
    onMouseOver: f => f
  },
  index: 0,
  style: {}
}

export default StationRow
