import React from 'react'

import Button from '../Button'

import Logo from '../../img/icon-img-hero.svg'

import './styles.scss'

const Hero = () => {
  return (
    <section className="s-hero">
      <div className="container">
        <div className="info">
          <h1>Front-end descomplicado e direto ao ponto!</h1>
          <p>Aprenda a desenvolver interfaces modernas e de alta qualidade com quem está na área atuando com projetos altamente renomados.</p>
          <Button name="btn" title="Fazer parte da lista de espera" />
        </div>
        <div className="wallpaper">
          <Logo />
        </div>
      </div>
    </section>
  )
}

export default Hero
