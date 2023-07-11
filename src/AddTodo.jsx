import { observer } from 'mobx-react-lite'
import store from './store'
import { useState } from 'react'

export const AddTodo = observer(() => {
	const [data, setData] = useState('')
	const { addTodo } = store.business

	const onSubmit = (e) => {
		e.preventDefault()
		addTodo(data)
		setData('')
	}
	return (
		<form onSubmit={onSubmit}>
			<input
				type={'text'}
				onChange={e => setData(e.target.value)}
				value={data}
			/>
			<button type={'submit'}>Add Todo</button>
		</form>
	)
})
