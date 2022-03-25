import { ADD_MESSAGE, UPDATE_MESSAGES } from './actions';

const initionalState = {
    messageList: {},
}

const messagesReducer = (state=initionalState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const { chatId, message } = action.payload;
            const currentList = state.messageList[chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [chatId]: [
                        ...currentList, 
                        {
                            ...message, 
                            id:`${chatId}${currentList.lenght}`
                        }
                    ]
                }
            };
        case UPDATE_MESSAGES:
            return{
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: action.messages
                }
            }    

            default:
                return state
    }
}

export default messagesReducer;