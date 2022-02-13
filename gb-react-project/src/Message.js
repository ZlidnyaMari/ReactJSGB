import React from 'react'

export default function Message(props) {
    
  return (
    <div>hello, {props.name}</div>
  )
}

Message.defaultProps = {name: 'Alex'}