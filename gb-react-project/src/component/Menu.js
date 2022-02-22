import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chats from '../pages/Chats'
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Notfound from '../pages/Notfound';
import { ListItemButton } from '@mui/material';


export default function () {


    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/chats/:chatsId' element={<Chats />} />
                <Route path='*' element={<Notfound />} />
            </Routes>

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
        </>
    )
}
