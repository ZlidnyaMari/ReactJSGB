import React from 'react';
import { Container } from '@mui/material';
import './App.css';
import { useState } from 'react';
import { AUTORS } from './constant/constant';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chats from './pages/Chats';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Notfound from './pages/Notfound';
import { ListItemButton } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';


function App() {
 

  return (
    <Container maxWidth="sm" sx={{ mt: '5rem' }}>
     <div className='chatBox'>
      <nav className='navChat'>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/'>Home</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/profile'>Profile</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/Chats'>Chats</Link>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>

      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chats/:chatId' element={
            <Chats />} />
          <Route path='*' element={ <Notfound /> } />
        </Routes>
      </>
      </div>

    </Container>
  );
}

export default App;
