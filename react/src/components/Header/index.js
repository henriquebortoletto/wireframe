import React from 'react'

import Button from '../Button'
import Menu from '../Menu'

import Logo from '../../img/logo.svg'

import './styles.scss'

const Header = () => {
  return (
    <header>
      <div className="container">
        <a href="./"><Logo /></a>
        
        <nav>
          <Menu />
          <Button name="btn" title="Call to action" />
        </nav>
        
        <Button name="menu-item menu-mobile" title="Menu Mobile" />
      </div>
    </header>
  )
}

export default Header
