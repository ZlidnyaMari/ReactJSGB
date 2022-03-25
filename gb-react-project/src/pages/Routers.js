import React from 'react';
import { Container } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chats from '../pages/Chats';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Notfound from '../pages/Notfound';
import { ListItemButton } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import Gists from '../pages/Gists';
import Registration from './Registration';
import Login from './Login';
import RequireAuth from '../hocs/RequireAuth';


const Routers = () => {
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
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/Gists'>Gists</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/registration'>Registration</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/login'>Login</Link>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>

      <>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />

          <Route element = { <RequireAuth /> }>
            <Route path='/profile' element={<Profile />} />
            <Route path='/gists' element={<Gists />} />
            <Route path='/chats/:chatId' element={
              <Chats />} />
          </Route>
          
          <Route path='*' element={ <Notfound /> } />
        </Routes>
      </>
      </div>

    </Container>
    )
};

export default Routers;