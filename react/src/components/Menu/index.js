import React from 'react'

import './styles.scss'

const Menu = () => {
  return (
    <ul>
      {[...Array(4)].map((item, indice) => {
        return (
          <li key={ indice }>
            <a href="./" className="menu-item">Menu item</a>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
