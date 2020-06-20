import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIce } from '../Redux';

function Item (props){
	return(
		<div>
		<h2>Items : {props.item}</h2>
		<button style={{width: '115px', height: '30px', borderRadius: '5px'}} onClick={props.buyItem} >Buy Item</button>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	const itemstate = ownProps.cake ? state.cake.numberc : state.ice.numberi
	return{
		item: itemstate
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const dispatchfunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIce())
	return{
		buyItem	: dispatchfunction
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Item);