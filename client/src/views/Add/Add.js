import React from 'react'

function Add(props) {
  return (
    <div>
        <h1>{props.id} : {props.title}</h1>
        <h3>{props.category} : ₹{props.price}</h3>
    </div>
  )
}

export default Add