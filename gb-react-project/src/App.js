import React from 'react';
import { Container } from '@mui/material';
import Menu from './component/Menu';
import './App.css';
import ChatList from './component/ChatList';


function App() {


  return (
    <Container maxWidth="sm" sx={{ mt: '5rem' }}>

      <div className='chatBox'>
        <Menu />
        <ChatList />
      </div>

    </Container>
  );
}

export default App;
