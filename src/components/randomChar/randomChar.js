import React, { Component } from 'react'
import styled from 'styled-components'
import gotService from '../../services/gotService'

const RandomBlock = styled.div`
	background-color: #fff;
	padding: 25px 25px 15px 25px;
	margin-bottom: 40px;
`

const RandomTitle = styled.div`
	margin-bottom: 20px;
	text-align: center;
`

const TermSpan = styled.span`
	font-weight: bold;
`

export default class RandomChar extends Component {
	constructor() {
		super()
		this.updateChar()
	}

	gotService = new gotService()

	state = {
		char: {}
	}

	onCharLoaded = (char) => {
		this.setState({ char })
	}

	updateChar() {
		const id = Math.floor(Math.random() * 140 + 25) // 25 - 140
		this.gotService.getCharacter(id).then(this.onCharLoaded)
	}

	render() {
		const {
			char: { name, gender, born, died, culture }
		} = this.state
		return (
			<RandomBlock className='rounded'>
				<RandomTitle>Random Character: {name}</RandomTitle>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item d-flex justify-content-between'>
						<TermSpan>Gender</TermSpan>
						<span>{gender}</span>
					</li>
					<li className='list-group-item d-flex justify-content-between'>
						<TermSpan>Born </TermSpan>
						<span>{born}</span>
					</li>
					<li className='list-group-item d-flex justify-content-between'>
						<TermSpan>Died </TermSpan>
						<span>{died}</span>
					</li>
					<li className='list-group-item d-flex justify-content-between'>
						<TermSpan>Culture </TermSpan>
						<span>{culture}</span>
					</li>
				</ul>
			</RandomBlock>
		)
	}
}
