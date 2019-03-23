import React from 'react'
import PropTypes from 'prop-types'
import { FixedSizeList as List } from 'react-window'
import StationRow, { Station } from './Row'

const StationList = ({ stations }) => (
  <>
    <h1>Citi Bike Stations</h1>
    <List
      height={150}
      itemCount={stations.length}
      itemSize={35}
      width={300}
      itemData={stations}
    >
      {StationRow}
    </List>
  </>
)

StationList.propTypes = {
  stations: PropTypes.arrayOf(
    PropTypes.shape(Station)
  ).isRequired
}

StationList.defaultProps = {
  stations: []
}

export default StationList
