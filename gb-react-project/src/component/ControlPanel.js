import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { AUTORS } from '../constant/constant';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Send } from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/messages/actions';



export default function ControlPanel() {

  const [value, setValue] = useState('');
  const { chatId } = useParams();
  const { name } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const textHandler = (event) => {
    setValue(event.target.value)
  };

  let handler = () => {
    if (value !== '') {
      const message = {
        text: value,
        author: name
      }
      dispatch(addMessage(chatId, message))
      setValue('');
    }
  };

//   useEffect(() => {
//   if (messegeList.length > 0 && messegeList[messegeList.length - 1].author !== AUTORS.bot) {
//     setTimeout(() => setMessegeList([...messegeList, {

//       icon: <AndroidIcon />,
//       text: 'Привет, я бот',
//       author: AUTORS.bot,

//     }]), 1500)
//   }
// }, [messegeList])


  return (
    <div className='messenger'>
      <div className='messageBox'>
        <TextField autoFocus fullWidth
          variant='standard'
          label="Сообщение"
          value={value}
          onChange={textHandler}></TextField>
        <Button variant="contained" endIcon={<Send />} onClick={handler}>Send</Button>
      </div>
    </div>
  )
}
