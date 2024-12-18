import React from 'react'

export default function HogTile({hog}) {
  return (
    <div>
      <h2>{hog.name}</h2>
      <img src={hog.image} alt={hog.name}/>
    </div>
  )
}
