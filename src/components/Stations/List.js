import React from 'react'
import PropTypes from 'prop-types'
import { FixedSizeList as List } from 'react-window'
import StationRow, { Station } from './Row'

const StationList = ({ className, height, rowHeight, stations, width }) => (
  <>
    <List
      className={className}
      height={height}
      itemCount={stations.length}
      itemData={stations}
      itemSize={rowHeight}
      width={width}
    >
      {StationRow}
    </List>
  </>
)

StationList.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  rowHeight: PropTypes.number,
  stations: PropTypes.arrayOf(
    PropTypes.shape(Station)
  ).isRequired,
  width: PropTypes.number
}

StationList.defaultProps = {
  className: 'station-list',
  height: 700,
  rowHeight: 50,
  stations: [],
  width: 400
}

export default StationList
