import React from 'react'
import PropTypes from 'prop-types'

const DownloadFile = (props) => (
  <a href={props.src} download>{props.children}</a>
)

DownloadFile.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.any
}

export default DownloadFile
