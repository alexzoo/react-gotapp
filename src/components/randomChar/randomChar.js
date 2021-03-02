import React, { Component } from 'react'
import styled from 'styled-components'
import gotService from '../../services/gotService'
import Spinner from '../spinner'
import ErrorMessage from '../errorMessage'

const RandomBlock = styled.div`
	background-color: #fff;
	padding: 25px 25px 15px 25px;
	margin-bottom: 40px;
	img {
		width: 100%;
	}
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
		char: {},
		loading: true,
		error: false
	}

	onCharLoaded = (char) => {
		this.setState({ char, loading: false })
	}

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        });
    }

	updateChar() {
		const id = Math.floor(Math.random() * 140 + 25) // 25 - 140
		// const id = 1300000
		this.gotService.getCharacter(id)
			.then(this.onCharLoaded)
			.catch(this.onError)
	}

	render() {
		const {	char, loading, error } = this.state

		const errorMessage = error ? <ErrorMessage/> : null
		const spinner = loading ? <Spinner/> : null
		const content = !(loading || error) ? <View char={char}/> : null

		

		return <RandomBlock className='rounded'>
			{errorMessage}
			{spinner}
			{content}
		</RandomBlock>
	}
}

const View = ({ char }) => {
	const { name, gender, born, died, culture } = char
	return (
		<>
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
		</>
	)
}
