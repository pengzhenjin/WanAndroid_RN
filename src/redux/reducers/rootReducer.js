import {combineReducers} from 'redux';
import loadingReducer from './loadingReducer';
import homeReducer from './homeReducer';

export default combineReducers({
    loadingReducer,
    homeReducer,
});
