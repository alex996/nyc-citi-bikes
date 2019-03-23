import React from 'react'
import PropTypes from 'prop-types'

const Box = props => (
  <div {...props} />
)

Box.propTypes = {
  className: PropTypes.string
}

Box.defaultProps = {
  className: 'box'
}

export default Box
