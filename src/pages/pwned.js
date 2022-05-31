import React, { useState } from 'react'
import classNames from 'classnames'
import PageLayout from '../layouts/Page/'

import './pwned.scss'

const SHA1 = async msg => {
  const msgBuffer = new TextEncoder('utf-8').encode(msg)
  const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}

const haveibeenpwned = async (passwd) => {
  const hash = await SHA1(passwd)
  return fetch(`https://api.pwnedpasswords.com/range/${hash.substring(0, 5)}`)
    .then(r => r.text())
    .then(r => {
      const pwnedhashes = r.split('\r\n').map(line => line.split(':')[0])
      return pwnedhashes.filter(pwnedhash => hash.substring(0, 5) + pwnedhash.toLowerCase() === hash).length > 0
    })
}

const MessageContent = ({ firstRun, pwned, error }) => {
  if (firstRun) {
    return <>Type your password<br />and press Enter</>
  }

  if (error) {
    return <>Error: {error.message}</>
  }

  if (pwned) {
    return <>Your password has been pwned</>
  } else {
    return <>Your password has not been pwned</>
  }
}

export default function Pwned() {
  const [isPwned, setIsPwned] = useState({ loading: false, pwned: false, error: null })
  const [firstRun, setFirstRun] = useState(true)
  const { loading, pwned, error } = isPwned

  const handleSubmit = async e => {
    e.preventDefault()
    const passwd = e.target.elements.passwd.value
    
    if (passwd.length === 0) {
      setFirstRun(true)
      setIsPwned({ loading: false, pwned: false, error: null })
      return
    }

    setFirstRun(false)
    setIsPwned({ ...isPwned, loading: true })

    try {
      const hasBeenPwned = await haveibeenpwned(passwd)
      setIsPwned({ loading: false, pwned: hasBeenPwned, error: null })
    } catch (err) {
      setIsPwned({ ...isPwned, loading: false, error: err })
    }
  }

  return (
    <PageLayout>
      <form className='pwned' onSubmit={handleSubmit}>
        <input id='passwd' type='password' placeholder='Password' className={classNames({ loading })} />
        <div id='msg' className={classNames({ pwned: pwned || error }, { notpwned: !pwned && !firstRun && !error })}>
          <MessageContent firstRun={firstRun} pwned={pwned} error={error} />
        </div>
      </form>
    </PageLayout>
  )
}
  