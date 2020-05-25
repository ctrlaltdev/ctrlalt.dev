import React from 'react'
import PropTypes from 'prop-types'

const LinkFile = (props) => (
  <a href={props.to}>{props.children}</a>
)

LinkFile.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.element
}

export default LinkFile
