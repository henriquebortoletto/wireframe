import React from 'react'

import './index.scss'

const Footer = () => {
  return (
    <footer>
      <div class="container">
      
        <div class="s-footer-block-top">
          <div class="s-footer-block-top-area-logo">
            <a href="./">
              <img src="./img/logo-footer.svg" alt="Imagem da logo" title="Imagem da logo" />
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc orci, eleifend eu porta eu, viverra.</p>
          </div>

          <nav class="s-footer-block-top-area-nav">
            <div class="list-pages">
              <h3>Lista de páginas</h3>
              <ul>
                <li><a href="./">Text link 01</a></li>
                <li><a href="./">Text link 02</a></li>
                <li><a href="./">Text link 03</a></li>
                <li><a href="./">Text link 04</a></li>
              </ul>
            </div>

            <div class="solutions">
              <h3>Soluções</h3>
              <ul>
                <li><a href="./">Text link 01</a></li>
                <li><a href="./">Text link 02</a></li>
              </ul>
            </div>

            <div class="social-networks">
              <h3>Nossas redes sociais</h3>
              <ul>
                <li>
                  <a href="./">
                    <img src="./img/instagram.svg" alt="Icone do Instagram" title="Icone do Instagram" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="./">
                    <img src="./img/linkedin.svg" alt="Icone do Linkedin" title="Icone do Linkedin" />
                    <span>Linkedin</span>
                  </a>
                </li>
                <li>
                  <a href="./">
                    <img src="./img/youtube.svg" alt="Icone do Youtube" title="Icone do Youtube" />
                    <span>Youtube</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div class="s-footer-block-bottom">
          <p>2021 &copy; Todos os direitos reservados. <strong>Codeboost</strong></p>
          <div class="boost">
            <span>Grupo</span>
            <img src="./img/boost.svg" alt="Imagem do logo do Boost" title="Imagem do logo do Boost" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer