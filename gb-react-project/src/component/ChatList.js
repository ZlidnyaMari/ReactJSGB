import React from 'react'
import { useParams, Link } from 'react-router-dom';
import List from '@mui/material/List';
import { ListItemButton } from '@mui/material';


const ChatList = (props) => {
  //const { chatsId } = useParams;
  const { chats } = props;

  return (
      <List>
        {Object.keys(chats).map((id, index) => (
          <ListItemButton key={index}>
            <Link to={`/chats/${id}`} >
             {chats?.[id]?.name}
            </Link>
          </ListItemButton>
        ))}
      </List>
  )
}

export default ChatList;
