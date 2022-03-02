import { ADD_CHAT } from "./actions"

const initionalState = {
    chatList: []
};

const chatsReducer = (state=initionalState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `id${state.chatList.length}`,
                        name: action.payload
                    }
                ]
            }

        default:
            return state
    }
}

export default chatsReducer;