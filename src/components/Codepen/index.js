import React from 'react'
import classNames from 'classnames'

import './codepen.sass'

export const Codepen = ({ user, id, featured = false }) => (
  <iframe className={classNames('codepen', { 'codepen--featured': featured })} scrolling="no" title={`codepen/${user}/${id}`} src={`https://codepen.io/${user}/embed/${id}`} frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" />
)

export const Codepens = ({ user, pens }) => (
  <div className='codepens'>
    {
      pens.map(id => (
        <Codepen key={id} user={user} id={id} />
      ))
    }
  </div>
)
