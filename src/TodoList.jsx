import { observer } from 'mobx-react-lite'
import store from './store'
export const TodoList = observer(() => {
	const { todos, completeTodo } = store.business
	if (!todos.length) {
		return <h2>Ne ma nichogo</h2>
	}
	return (
		<ul>
			{todos.map(todo => (
				<li key={todo.id}>
					<input
						onChange={() => completeTodo(todo.id)}
						type="checkbox"
						checked={todo.completed}
					/>
					<span>{todo.title}</span>
				</li>
			))}
		</ul>
	)
})
