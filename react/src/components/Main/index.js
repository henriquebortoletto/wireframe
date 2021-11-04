import React from 'react'

import Title from '../Title'
import Card from '../Card'
import Button from '../Button'
import Thumb from '../Thumb'

import './styles.scss'

const Main = () => {
  return (
    <section className="s-main">
      <div className="container">
        <div className="s-main-block-top">
          <Title name="info center" />
          <div className="cards">
            <Card theme="card" />
            <Card theme="card light" />
            <Card theme="card" />
          </div>
        </div>
        <div className="s-main-block-bottom">
          <div className="info-wrapper">
            <Title name="info" />
            <Button name="btn" title="Call to action" />
          </div>
          <div className="gallery-image">
            { [...Array(12)].map((_, indice) => <Thumb keys={ indice } />) }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
