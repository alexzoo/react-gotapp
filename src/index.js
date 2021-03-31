import { createStore, bindActionCreators } from 'redux'
import * as actions from './actions'
import reducer from './reducer'

const store = createStore(reducer)
const { dispatch } = store

const { inc, dec, res } = bindActionCreators(actions, dispatch)

document.getElementById('inc').addEventListener('click', inc)

document.getElementById('dec').addEventListener('click', dec)

document.getElementById('res').addEventListener('click', res)

const update = () => {
	document.getElementById('counter').textContent = store.getState()
}

store.subscribe(update)
