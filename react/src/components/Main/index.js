import React from 'react'

import Title from '../Title'
import Card from '../Card'

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
            <div className="info">
              <h2>Título</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <button className="btn">Call to action</button>
          </div>

          <div className="gallery-image">
            <div className="image">
              <img src="./img/icon-thumb.svg" alt="Imagem da seção de galeria" title="Imagem da seção de galeria" />
            </div>
            <div className="image">
              <img src="./img/icon-thumb.svg" alt="Imagem da seção de galeria" title="Imagem da seção de galeria" />
            </div>
            <div className="image">
              <img src="./img/icon-thumb.svg" alt="Imagem da seção de galeria" title="Imagem da seção de galeria" />
            </div>
            <div className="image">
              <img src="./img/icon-thumb.svg" alt="Imagem da seção de galeria" title="Imagem da seção de galeria" />
            </div>
            <div className="image">
              <img src="./img/icon-thumb.svg" alt="Imagem da seção de galeria" title="Imagem da seção de galeria" />
            </div>
            <div className="image">
              <img src="./img/icon-thumb.svg" alt="Imagem da seção de galeria" title="Imagem da seção de galeria" />
            </div>
            <div className="image">
              <img src="./img/icon-thumb.svg" alt="Imagem da seção de galeria" title="Imagem da seção de galeria" />
            </div>
            <div className="image">
              <img src="./img/icon-thumb.svg" alt="Imagem da seção de galeria" title="Imagem da seção de galeria" />
            </div>
            <div className="image">
              <img src="./img/icon-thumb.svg" alt="Imagem da seção de galeria" title="Imagem da seção de galeria" />
            </div>
            <div className="image">
              <img src="./img/icon-thumb.svg" alt="Imagem da seção de galeria" title="Imagem da seção de galeria" />
            </div>
            <div className="image">
              <img src="./img/icon-thumb.svg" alt="Imagem da seção de galeria" title="Imagem da seção de galeria" />
            </div>
            <div className="image">
              <img src="./img/icon-thumb.svg" alt="Imagem da seção de galeria" title="Imagem da seção de galeria" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main