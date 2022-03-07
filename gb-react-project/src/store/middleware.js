import { AUTORS } from "../constant/constant";
import { addMessage, ADD_MESSAGE } from "./messages/actions";

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

export default middelware;