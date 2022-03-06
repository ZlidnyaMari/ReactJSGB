import React from 'react'
import MessageList from '../component/MessageList';
import ControlPanel from '../component/ControlPanel';
import ChatList from '../component/ChatList';



const Chats = () => {
  return (
    <>
      <div>
        <ChatList />
      </div>
      <div>
        <ControlPanel />
        <MessageList />
      </div>

    </>
  )
}

export default Chats


