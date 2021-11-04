import React from 'react'

import Icon from '../../img/icon-circle.svg'
import './styles.scss'

const Card = props => {
  return (
    <div className={ props.theme }>
      <Icon />
      <div className="card-info">
        <h3>Título</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc orci, eleifend eu porta eu, viverra non metus.</p>
      </div>
    </div>
  )
}

export default Card
