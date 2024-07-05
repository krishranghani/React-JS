import React from 'react'

const Card = (Props) => {
  return (
    <div>
    <h1 style={{ color : 'red'}}> card name is  {Props.name}</h1>
    <h2> card price is {Props.price}</h2>
      
    </div>
  )
}

export default Card
