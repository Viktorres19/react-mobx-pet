import { observer } from 'mobx-react-lite'
import store from '../../store/index.js'
import {UnorderedList} from './styles.js'

export const TodoList = observer(() => {
	const { todos, completeTodo, removeTodo } = store.business
	if (!todos.length) {
		return <h2>You don`t have tasks for now</h2>
	}
	return (
		<UnorderedList>
			{todos.map(todo => (
				<li key={todo.id}>
					<input
						onChange={() => completeTodo(todo.id)}
						type="checkbox"
						checked={todo.completed}
					/>
					<span>{todo.title}</span>
					<button onClick={() => removeTodo(todo.id)}>X</button>
				</li>
			))}
		</UnorderedList>
	)
})
