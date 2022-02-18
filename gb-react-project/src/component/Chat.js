import { ListItemText, ListItemButton } from '@mui/material'
import List from '@mui/material/List';
import React from 'react'


export const Chat = () => {

    const chats = [
        {
            name: 'chat 1',
            id: 111,
        },
        {
            name: 'chat 2',
            id: 222,
        },
        {
            name: 'chat 3',
            id: 333,
        }
    ]


    return (
        <List>
            {chats.map((item) => (
                <ListItemButton>
                    <ListItemText primary={item.name} />
                </ListItemButton>
            ))}
        </List>
    )
}

