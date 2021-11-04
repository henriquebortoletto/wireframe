import React from 'react'

import './styles.scss'

const Title = props => {
  return (
    <div className={ props.name }>
      <h2>Título</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}

export default Title