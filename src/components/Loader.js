import React from 'react'
import PropTypes from 'prop-types'

const Loader = ({ children, ...other }) => (
  <h1 {...other}>{children}</h1>
)

Loader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Loader.defaultProps = {
  children: 'Loading...',
  className: 'loader'
}

export default Loader
