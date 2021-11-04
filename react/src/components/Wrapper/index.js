import React from 'react'

import Hero from '../Hero'
import Main from '../Main'
import Newsletter from '../Newsletter'

import './styles.scss'

const Wrapper = () => {
  return (
    <main>
      <Hero />
      <Main />
      <Newsletter />
    </main>
  )
}

export default Wrapper