import { combineReducers } from 'redux';
import TopLevelReducer from './toplevelreducer'

export default combineReducers({
    top: TopLevelReducer,
    other: {}
});