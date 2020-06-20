import React from 'react';
import { connect } from 'react-redux';
import { buyIce } from '../Redux';

function Ice (props) {
	return (
		<div>
			<h2>Cream : {props.numberi} </h2>
			<button style={{width: '115px', height: '30px', borderRadius: '5px'}} onClick={props.buyIce} >Buy Ice Cream</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return{
		numberi: state.ice.numberi
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		buyIce : () => dispatch(buyIce())
	}
}



export default connect(
mapStateToProps,
mapDispatchToProps
)(Ice);