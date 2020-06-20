import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../Redux';

function CakeHooks() {

	const numberc = useSelector(state => state.cake.numberc);
	const dispatch = useDispatch();
	return(
		<div>
			<h2>Cakes : {numberc}</h2>
			<button style={{width: '115px', height: '30px', borderRadius: '5px'}} onClick = {() => dispatch(buyCake())} >Buy Cake</button>
		</div>
	)
}

export default CakeHooks;