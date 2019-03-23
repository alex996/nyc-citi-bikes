import React from 'react'
import PropTypes from 'prop-types'
import Station from './type'

const StationRow = ({ className, data: { onMouseOver, stations }, index, style }) => {
  const { id, stationName, availableDocks, totalDocks } = stations[index]
  const availability = (availableDocks / totalDocks * 100).toFixed(2)

  return (
    <div data-id={id} className={className} style={style} onMouseOver={onMouseOver}>
      <span>{stationName}</span>
      <span>{availability}%</span>
    </div>
  )
}

StationRow.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    onMouseOver: PropTypes.func,
    stations: PropTypes.arrayOf(
      PropTypes.shape(Station)
    ).isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object
}

StationRow.defaultProps = {
  className: 'station-row',
  data: {
    onMouseOver: f => f,
    stations: []
  },
  index: 0,
  style: {}
}

export default StationRow
