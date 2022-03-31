import { AUTORS } from "../constant/constant";
import firebase from "../services/firebase";
import { addMessage, ADD_MESSAGE, updateMessages } from "./messages/actions";
import { getDatabase, push, ref, set, remove, onValue } from 'firebase/database';
import { chatListUpdate } from "./chats/actions";
import { async } from "@firebase/util";

const middelware = store => next => action => {
    if (action.type === ADD_MESSAGE && action.payload.message.author !== AUTORS.bot) {
        const botMessage = {
            author: AUTORS.bot,
            text: 'Привет, я бот'
        }

        setTimeout(() => {
            store.dispatch(addMessage(action.payload.chatId, botMessage))
        }, 1000);
    }

    return next(action);
} 

export const addChatWithFB = (name) => async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, '/chats');
    const newChatRef = push(chatRef);
    set(newChatRef, { name: name }).then(res => {
        console.log('chat added', res);
    })
}

export const deleteChatWithFB = (id) => async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, `/chats/${id}`);
    const messagesRef = ref(db, `/messages/${id}`);
    remove(chatRef).then(res => {
        console.log('Chat Removed', res);
    });
    remove(messagesRef).then(res => {
        console.log('Delete messeges', res)
    });  
}

export const initTrackerWithFB = () => async (dispatch) => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, `/chats`);
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        const chatIds = Object.keys(data);
        const chatArr = chatIds.map(item => ({ id: item, name: data[item].name  }))
        dispatch(chatListUpdate(chatArr));
    })
}

export const getMessagesByChatiIdWithFB = (chatId) => async (dispatch) => {
    const db = getDatabase(firebase);
    const msgRef = ref(db, `/messages/${chatId}`);
    onValue(msgRef, (snapshot) => {
        const data = snapshot.val();
        const msg = data && Object.values(data);
        if (msg?.length > 0) {
            dispatch(updateMessages(chatId, msg))
        }
    })
}

export const addMessageWithFB = (chatId, message) => async () => {
    const db = getDatabase(firebase);
    const messageRef = ref(db, `/messages/${chatId}`);
    const newMessageRef = push(messageRef);
    set(newMessageRef, message).then((res) => {
        console.log('messages added', res)
    })

}

 
export default middelware;







