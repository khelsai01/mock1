import React from 'react'

const Planets = ({name, id, color,shape, size}) => {

  return (
    <div style={{width:"450px", height:"150px",margin:'auto'}}>
      <h3>{name}</h3>
      <p style={{color:'gray'}}>{name} have {"color"} color and {"shape"} shape </p>
    </div>
  )
}

export default Planets