import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import chatsReducer from './chats/reducer';
import messagesReducer from './messages/reducer';
//import middelware from './middleware';
import thunk from 'redux-thunk';
import profileReducer from './profile/reducer';
import storage from 'redux-persist/lib/storage';
import persistReduser from 'redux-persist/es/persistReducer';
import persistStore  from 'redux-persist/es/persistStore';
import gistsReducer from './gists/reducer';

const reducers = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer,
    gists: gistsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReduser = persistReduser(persistConfig, reducers);

const store = createStore(
    persistedReduser,
    composeEnhancers(applyMiddleware(thunk))
    );

export const persistor = persistStore(store);

export default store;
 