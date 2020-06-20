import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../Redux';

function Newcake (props) {
	const [num, setNumber] = useState(1);
	return (
		<div>
			<h2>Cakes : {props.numberc} </h2>
			<input style={{width: '105px', height: '20px' , borderRadius: '5px'}} type="text" value={num} onChange={e => setNumber(e.target.value)} />
			<br/>
			<br/>
			<button style={{width: '115px', height: '30px', borderRadius: '5px'}} onClick={() => props.buyCake(num)} >Buy {num} Cake</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return{
		numberc: state.cake.numberc
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		buyCake : (num) => dispatch(buyCake(num))
	}
}



export default connect(
mapStateToProps,
mapDispatchToProps
)(Newcake);