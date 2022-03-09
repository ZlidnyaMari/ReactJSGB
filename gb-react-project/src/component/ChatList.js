import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import List from '@mui/material/List';
import { ListItemButton, Button, Dialog, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from '../store/chats/actions';
import { Delete } from '@mui/icons-material';


const ChatList = () => {
  const { chatId } = useParams();
  const [visible, setVisible] = useState(false);
  const [chatName, setChatName] = useState('');
  const chats = useSelector(state => state.chats.chatList);
  const dispatch = useDispatch();

  const handleOpen = () => setVisible(true);

  const handleChange = (event) => {
    setChatName(event.target.value);
  }


  const onnAddChat = () => {
    dispatch(addChat(chatName));
    setChatName('');
    setVisible(false);
  }

  const removeChat = (index) => {
    dispatch(deleteChat(index));
  }
  
  return (
    <>
      <List>
        {chats?.map((chat, index) => (
          <ListItemButton key={index}>
            <Link to={`/chats/${chat.id}`} >
              {chat.name}
            </Link>
            <button onClick={() => removeChat(index)}><Delete /></button>
          </ListItemButton>
        ))}
      </List>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ width: '30px' }}> Add Chat </Button>
      <Dialog open={visible} onClose={() => setVisible(false)} >
        <TextField value={chatName} onChange={handleChange} />
        <Button variant="contained" onClick={onnAddChat}>Submit</Button>
      </Dialog>
    </>
  )
}

export default ChatList;
