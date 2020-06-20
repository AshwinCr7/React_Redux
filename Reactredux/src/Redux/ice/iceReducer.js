import { BUY_ICE } from './iceTypes';

const states = {
	numberi: 20
}

const iceReducer = (state = states, action) => {
	switch(action.type) {
		case BUY_ICE: return{
			...state,
			numberi: state.numberi - 1
		}

		default: return state
	}

}

export default iceReducer;