import React from 'react'
import PropTypes from 'prop-types'

const Loader = props => (
  <h1 {...props} /> // eslint-disable-line jsx-a11y/heading-has-content
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
