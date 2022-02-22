import { ListItemButton } from '@mui/material'
import List from '@mui/material/List';
import React from 'react'
import { AUTORS } from '../constant/constant';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const Chats = () => {
  // const [ chats, setChats] = useState(chatsList);

  const {chatsId} = useParams();

  const chatsList = {
    id1: {
        name: 'chat 1',
        mesages: [{ text: 'fistMessage', autor: AUTORS.me}]   
    },
    id2: {
        name: 'chat 2',
        mesages: [{ text: 'secondChat', autor: AUTORS.bot}] 
    },
  }

  return (
      <>
      <List>
          {Object.keys(chatsList).map((id) => (
              <ListItemButton>
                  <Link to = {`/Chats/${id}`} >
                  {chatsList[id].name} 
                  </Link>
              </ListItemButton> 
          ))}
      </List>
      </>
  )
}

export default Chats