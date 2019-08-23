import {combineReducers} from 'redux';
import TaskReducer from './TaskReducer';
import UpdateReducer from './UpdateReducer';


export default combineReducers({
    TaskReducer,
    UpdateReducer
})