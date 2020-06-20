import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceReducer from './ice/iceReducer';

const rootReducer = combineReducers({
	cake: cakeReducer,
	ice: iceReducer
})

export default rootReducer;
