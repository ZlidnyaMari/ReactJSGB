import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import chatsReducer from './chats/reducer';
import messagesReducer from './messages/reducer';
import middelware from './middleware';
import profileReducer from './profile/reducer';
import storage from 'redux-persist/lib/storage';
import persistReduser from 'redux-persist/es/persistReducer';
import persistStore  from 'redux-persist/es/persistStore';

const reducers = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReduser = persistReduser(persistConfig, reducers);

const store = createStore(
    persistedReduser,
    composeEnhancers(applyMiddleware(middelware))
    );

export const persistor = persistStore(store);

export default store;
 