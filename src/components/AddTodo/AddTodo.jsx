import { observer } from 'mobx-react-lite'
import store from '../../store/index.js'
import { useState } from 'react'
import { StyledAddTodo } from './styles.js'
import { Button } from '../styles/Button.styled.js'
import { InputText } from '../styles/InputText.styled.js'

export const AddTodo = observer(() => {
	const [data, setData] = useState('')
	const { addTodo, addTodoText } = store.business

	const onSubmit = (e) => {
		e.preventDefault()
		if (data) {
			addTodo(data)
			setData('')
		}
	}
	return (
		<StyledAddTodo onSubmit={onSubmit}>
			<InputText
				type={'text'}
				onChange={e => setData(e.target.value)}
				value={data}
				placeholder="anything..."
			/>
			<Button type={'submit'} bg='#2b1887'>
				{ addTodoText }
			</Button>
		</StyledAddTodo>
	)
})
