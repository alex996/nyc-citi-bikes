import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../Utils'

const StationSearch = ({ className, height, onSearch, placeholder, query, width }) => {
  const onChange = ({ target: { value } }) => onSearch(value)

  return (
    <Box style={{ height, width }}>
      <div className={className}>
        <input value={query} onChange={onChange} placeholder={placeholder} />
      </div>
    </Box>
  )
}

StationSearch.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  query: PropTypes.string,
  width: PropTypes.number
}

StationSearch.defaultProps = {
  className: 'station-search',
  height: 50,
  onSearch: f => f,
  placeholder: 'Search...',
  query: '',
  width: 400
}

export default StationSearch
