import React, { useEffect } from 'react';
import './App.css';
import {useState} from 'react';
import { AUTORS } from './constant/constant';



function App() {
  const [messegeList, setMessegeList] = useState([]);
  const [value, setValue] = useState('');

  let textHandler = (event) => {
    setValue(event.target.value);
  }

  let handler = () => {
    if (value != '') {
      setMessegeList([...messegeList, {
        autor: AUTORS.me,
        text: value,
      }]);

      setValue('');
    }
  }

  useEffect(() => {
    if (messegeList.length > 0 && messegeList[messegeList.length - 1].autor === AUTORS.me) {
      setTimeout( () => setMessegeList([...messegeList, {

        autor: AUTORS.bot,
        text: 'Привет, я бот'

      }]), 1500) 
    }
  }, [messegeList])

  return (
    <div className='container'>
      <textarea className='messeng' value={value} type='text' placeholder='Введите сообщение' onChange={textHandler}  ></textarea>
      <button className='button' onClick={handler}>Отправить</button>

      <ul className='list'>
        {messegeList.map((item) => (
          <>
            <li className='listAutor'>{item.autor}</li>
            <li className='listText'>{item.text}</li>
          </>
        ))}
      </ul>

    </div>
  );
}

export default App;
