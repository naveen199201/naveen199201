import handleCart from './handleCart';
import inputReducer from './inputText';
import bookSeatReducer from './bookSeatReducer';
import selectSeatReducer from './selectSeatReducer';
import { combineReducers } from "redux";
const rootReducers = combineReducers({
    handleCart,
    inputReducer,
    bookSeatReducer,
    selectSeatReducer,
    
})
export default rootReducers