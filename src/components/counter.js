import React from 'react'
import './counter.css'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Counter = ({counter, inc, dec, res}) => {
	return (
		<div className='content'>
			<div className='counter-wrap'>
				<h1>{counter}</h1>
			</div>
			<div className='btn-block'>
				<button onClick={inc} className='btn btn-inc'>
					INC
				</button>
				<button onClick={dec} className='btn btn-dec'>
					DEC
				</button>
				<button onClick={res} className='btn btn-res'>
					RES
				</button>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		counter: state
	}
}

export default connect(mapStateToProps, actions)(Counter)
