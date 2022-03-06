import React from 'react'
import ChatList  from '../component/ChatList'

const Notfound = (props) => {
  return (
    <div>
      <ChatList chats = {props.chats}/>
      <div>Страница не найдена</div>
    </div>
  )
}

export default Notfound;