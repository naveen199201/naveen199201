import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducer';
import thunk from 'redux-thunk';
const store = configureStore({
    reducer: rootReducers,
    middleware: [thunk],
})

export default store;
