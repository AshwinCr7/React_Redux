import { BUY_CAKE } from './cakeTypes';

const states = {
	numberc: 10
}

const cakeReducer = (state = states, action) => {
	switch(action.type) {
		case BUY_CAKE: return{
			...state,
			numberc: state.numberc - action.payload
		}

		default: return state
	}

}

export default cakeReducer;