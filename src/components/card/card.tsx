import React from 'react'

import "./card.css" 

interface CardProps {
    price: number,
    title: string,
    image: string
}

const card = ({price, title, image } : CardProps) => {
  return (
    <div className='card'>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p><b>Valor: </b>{price} R$</p>
    </div>
  )
}

export default card