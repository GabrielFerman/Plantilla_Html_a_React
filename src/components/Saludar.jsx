//import React from 'react' Esto se usa en versiones anteriores al react que ahorita esta funcionando
 
//Con estructura de objetos
/*const Saludar = (props) => {
  return (
    <div>Hola {props.nombre} {props.apellido} </div>
  )
}*/

//Destructurando objetos en props
// eslint-disable-next-line react/prop-types
const Saludar = ({nombre, apellido}) => {
    return (
      <div>Hola {nombre} {apellido} </div>
    )
  }

export default Saludar