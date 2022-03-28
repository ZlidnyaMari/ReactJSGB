export const ADD_CHAT = 'ADD_CHAT';
export const DELETE_CHAT = 'DELETE_CHAT';
export const CHATS_UPDATE = 'CHATS_UPDATE';

export const addChat = (name) => ({
    type: ADD_CHAT,
    payload: name

});

export const deleteChat = (index) => ({
    type: DELETE_CHAT,
    payload: index
});

export const chatListUpdate = (chats) => ({
    type: CHATS_UPDATE,
    chats
})
