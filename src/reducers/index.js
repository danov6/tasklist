import counter from './counter';
import isLogged from './isLogged';
import tasklist from './tasklist';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter,  //this means the same thing as counterReducer: counterReducer
    isLogged,
    tasklist
});

export default allReducers;