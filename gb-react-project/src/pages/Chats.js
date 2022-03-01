import React from 'react'
import { useParams } from 'react-router-dom';
import Notfound from './Notfound';
import Message from '../component/Message';
import ControlPanel from '../component/ControlPanel';
import ChatList from '../component/ChatList';



const Chats = (props) => {
  const { chats, setChats } = props;
  const {chatsId} = useParams();
  
  if(!chats[chatsId]) {
    return <Notfound />
  }

  return (
      <>
       <div>
         <ChatList chats = {chats}/>
       </div> 
       <div>
         <Message messages = {chats[chatsId].messages} />
         <ControlPanel chats = {chats} setChats = {setChats} />
       </div>

      </>
  )
}

export default Chats


