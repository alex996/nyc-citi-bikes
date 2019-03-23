import React from 'react'
import PropTypes from 'prop-types'

import { FixedSizeList as List } from 'react-window'
import { Box } from '../Utils'
import StationRow from './Row'
import Station from './type'

const StationList = ({ className, height, onSelect, rowHeight, stations, width }) => {
  const onMouseOver = ({ target }) => {
    onSelect(target.dataset.id || target.closest('div').dataset.id)
  }

  const data = { onMouseOver, stations }

  return (
    <Box>
      <List
        className={className}
        height={height}
        itemCount={stations.length}
        itemData={data}
        itemSize={rowHeight}
        width={width}
      >
        {StationRow}
      </List>
    </Box>
  )
}

StationList.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  onSelect: PropTypes.func,
  rowHeight: PropTypes.number,
  stations: PropTypes.arrayOf(
    PropTypes.shape(Station)
  ).isRequired,
  width: PropTypes.number
}

StationList.defaultProps = {
  className: 'station-list',
  height: 600,
  onSelect: f => f,
  rowHeight: 50,
  stations: [],
  width: 400
}

export default StationList
