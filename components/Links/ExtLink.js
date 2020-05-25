import React from 'react'
import PropTypes from 'prop-types'

const ExtLink = (props) => (
  <a href={props.to} target="_blank" rel="noreferrer">{props.children}</a>
)

ExtLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any
}

export default ExtLink
