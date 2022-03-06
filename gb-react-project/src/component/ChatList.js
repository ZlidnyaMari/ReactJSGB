import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import List from '@mui/material/List';
import { ListItemButton, Button, Dialog, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../store/chats/actions';


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
  console.log(chats)
  return (
    <>
      <List>
        {chats?.map((chat, index) => (
          <ListItemButton key={index}>
            <Link to={`/chats/${chat.id}`} >
              {chat.name}
            </Link>
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
