import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const Box = ({ className, defaultClass, ...other }) => (
  <div className={clsx(defaultClass, className)} {...other} />
)

Box.propTypes = {
  className: PropTypes.string,
  defaultClass: PropTypes.string
}

Box.defaultProps = {
  className: '',
  defaultClass: 'box'
}

export default Box
