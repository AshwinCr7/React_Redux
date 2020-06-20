import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../Redux';

function Cake (props) {
	return (
		<div>
			<h2>Cakes : {props.numberc} </h2>
			<button style={{width: '115px', height: '30px', borderRadius: '5px'}} onClick={props.buyCake} >Buy Cake</button>
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
		buyCake : () => dispatch(buyCake())
	}
}



export default connect(
mapStateToProps,
mapDispatchToProps
)(Cake);