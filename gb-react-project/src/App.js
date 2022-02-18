import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import { AUTORS } from './constant/constant';
import Button from '@mui/material/Button';
import { Send } from "@mui/icons-material";
import { TextField } from '@mui/material';
import { Container } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AndroidIcon from '@mui/icons-material/Android';
import MessageIcon from '@mui/icons-material/Message';

function App() {
  const [messegeList, setMessegeList] = useState([]);
  const [value, setValue] = useState('');

  let textHandler = (event) => {
    setValue(event.target.value);
  }

  let handler = () => {
    if (value !== '') {
      setMessegeList([...messegeList, {
        icon: <MessageIcon />,
        text: value,
        autor: AUTORS.me,

      }]);

      setValue('');
    }
  }

  useEffect(() => {
    if (messegeList.length > 0 && messegeList[messegeList.length - 1].autor === AUTORS.me) {
      setTimeout(() => setMessegeList([...messegeList, {

        icon: <AndroidIcon />,
        text: 'Привет, я бот',
        autor: AUTORS.bot,

      }]), 1500)
    }
  }, [messegeList])

  return (
    <Container maxWidth="sm" sx={{ mt: '5rem' }}>
      <div className='messageBox'>
        <TextField autoFocsus fullWidth variant='standard' label="Сообщение" value={value} onChange={textHandler}></TextField>
        <Button variant="contained" endIcon={<Send />} onClick={handler}>Send</Button>
      </div>

      <div className='messegelist'>
        <List>
          {messegeList.map((item, index) => (
            <ListItem disable='true' key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Container>
  );
}

export default App;
