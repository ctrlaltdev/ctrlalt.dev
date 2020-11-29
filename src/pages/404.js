import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import './404.sass'

const E404 = () => {
  return (
  <>
    <Helmet title='404 - Not Found' />
    <Link to='/'>
      <div className='error404'>
        <h1>404</h1>
      </div>
    </Link>
  </>
  )
}

export default E404
