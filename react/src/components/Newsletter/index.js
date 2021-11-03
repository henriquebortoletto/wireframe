import React from 'react'

import Button from '../Button'

import './styles.scss'

const Newsletter = () => {
  return (
    <section class="s-newsletter">
      <div class="container">
        <h2>Front-end descomplicado e direto ao ponto!</h2>
        <p>Aprenda a desenvolver interfaces modernas e de alta qualidade com quem está na área atuando com projetos altamente renomados.</p>
        <Button name="btn" title="Fazer parte da lista de espera" />
      </div>
    </section>
  )
}

export default Newsletter
