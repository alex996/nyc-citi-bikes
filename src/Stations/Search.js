import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../Utils'

const StationSearch = ({ className, onSearch, placeholder, query }) => {
  const onChange = ({ target: { value } }) => onSearch(value)

  return (
    <Box className={className}>
      <input value={query} onChange={onChange} placeholder={placeholder} />
    </Box>
  )
}

StationSearch.propTypes = {
  className: PropTypes.string,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  query: PropTypes.string
}

StationSearch.defaultProps = {
  className: 'station-search',
  onSearch: f => f,
  placeholder: 'Search...',
  query: ''
}

export default StationSearch
