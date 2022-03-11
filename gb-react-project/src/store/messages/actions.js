import { AUTORS } from "../../constant/constant";

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = (chatId, message ) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId: chatId,
        message: message
    }
})

export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));

    if (message.author !== AUTORS.bot) {
        const botMessage = {
            author: AUTORS.bot,
            text: 'Привет, я бот из redax thunk'
        }

        setTimeout(() => {
            dispatch(addMessage(chatId, botMessage))
        }, 1000);
    }
}