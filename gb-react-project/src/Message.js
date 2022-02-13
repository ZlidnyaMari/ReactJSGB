import React from 'react'

export default function Message(props) {
    
  return (
    <h1>hello, {props.myName}</h1>
  )
}

//Message.defaultProps = {name: 'Alex'}