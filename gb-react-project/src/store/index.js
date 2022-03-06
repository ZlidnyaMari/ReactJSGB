import { combineReducers, createStore } from 'redux';
import chatsReducer from './chats/reducer';
import messagesReducer from './messages/reducer';
import profileReducer from './profile/reducer';

const reducers = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer


})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
 