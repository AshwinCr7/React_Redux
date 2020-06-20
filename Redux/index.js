const redux = require('redux')
const reduxLogger = require('redux-logger')

const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE = 'BUY_ICE'

function buycake(){
	return	{
		type : BUY_CAKE,
		info : 'First Redux Action'
	}
}

function buyice(){
	return	{
		type : BUY_ICE,
		info : 'First Redux Action'
	}
}

const cakeState = {
	numcakes : 10
}

const iceState = {
	numice : 20
}

// const initialState = {
// 	numcakes : 10,
// 	numice : 20
// }

// const reducer = (state = initialState, action) => {
// 	switch(action.type){
// 		case BUY_CAKE: return {
// 			...state,
// 			numcakes : state.numcakes - 1
// 		}

// 		case BUY_ICE: return {
// 			...state,
// 			numice : state.numice - 1
// 		}

// 		default : return state
// 	}
// }

const cakereducer = (state = cakeState, action) => {
	switch(action.type){
		case BUY_CAKE: return {
			...state,
			numcakes : state.numcakes - 1
		}		

		default : return state
	}
}

const icereducer = (state = iceState, action) => {
	switch(action.type){
		case BUY_ICE: return {
			...state,
			numice : state.numice - 1
		}		

		default : return state
	}
}

const red = combineReducers({
	cake : cakereducer,
	ice : icereducer
})

const store = createStore(red, applyMiddleware(logger))
console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => {})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyice())
store.dispatch(buyice())
store.dispatch(buyice())

unsubscribe()



