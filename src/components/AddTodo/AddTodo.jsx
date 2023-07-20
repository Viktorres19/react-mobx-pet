import { observer } from 'mobx-react-lite'
import store from '../../store/index.js'
import { useState } from 'react'
import {StyledAddTodo} from './styles.js'

export const AddTodo = observer(() => {
	const [data, setData] = useState('')
	const { addTodo } = store.business

	const onSubmit = (e) => {
		e.preventDefault()
		addTodo(data)
		setData('')
	}
	return (
		<StyledAddTodo onSubmit={onSubmit}>
			<input
				type={'text'}
				onChange={e => setData(e.target.value)}
				value={data}
				placeholder="anything..."
			/>
			<button type={'submit'}>Add Todo</button>
		</StyledAddTodo>
	)
})
