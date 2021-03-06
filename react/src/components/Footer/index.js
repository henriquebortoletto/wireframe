import React from 'react'

import Logo from '../../img/logo-footer.svg'
import Instagram from '../../img/instagram.svg'
import Linkedin from '../../img/linkedin.svg'
import Youtube from '../../img/youtube.svg'
import Boost from '../../img/boost.svg'

import './styles.scss'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="s-footer-block-top">
          <div className="s-footer-block-top-area-logo">
            <a href="./">
              <Logo />
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc orci, eleifend eu porta eu, viverra.</p>
          </div>
          <nav className="s-footer-block-top-area-nav">
            <div className="list-pages">
              <h3>Lista de páginas</h3>
              <ul>
                { [...Array(4)].map((_, indice) =>  <li keys={ indice }><a href="./">Text link 0{ indice + 1 }</a></li>) }
              </ul>
            </div>
            <div className="solutions">
              <h3>Soluções</h3>
              <ul>
                { [...Array(2)].map((_, indice) =>  <li keys={ indice }><a href="./">Text link 0{ indice + 1 }</a></li>) }
              </ul>
            </div>
            <div className="social-networks">
              <h3>Nossas redes sociais</h3>
              <ul>
                <li><a href="./"><Instagram /><span>Instagram</span></a></li>
                <li><a href="./"><Linkedin /><span>Linkedin</span></a></li>
                <li><a href="./"><Youtube /><span>Youtube</span></a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="s-footer-block-bottom">
          <p>2021 &copy; Todos os direitos reservados. <strong>Codeboost</strong></p>
          <div className="boost"><span>Grupo</span><Boost /></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
