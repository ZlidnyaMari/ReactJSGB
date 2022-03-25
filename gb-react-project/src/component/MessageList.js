import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { AUTORS } from '../constant/constant';
import AndroidIcon from '@mui/icons-material/Android'; 
import MessageIcon  from '@mui/icons-material/Message';
import { useEffect } from 'react';
import { getMessagesByChatiIdWithFB } from '../store/middleware';

export default function MessageList() {

const allMessages = useSelector(state => state.messages.messageList);
const { chatId } = useParams();
const messages = allMessages[chatId];
const dispatch = useDispatch();

useEffect( () => {
  dispatch(getMessagesByChatiIdWithFB(chatId))
}, [chatId]);
  
  return (
      <div className='messegelist'>
        <List>
          {messages?.map((item, index) => (
            <ListItem disable='true' key={index}>
              <ListItemIcon>{item.author !== AUTORS.bot ? <MessageIcon /> : <AndroidIcon />}</ListItemIcon>
              <ListItemText primary={item.text} secondary= {item.author} />
            </ListItem>
          ))}
        </List>
      </div>
  )
}

