import { observer } from 'mobx-react-lite'
import store from '../../store/index.js'
import { UnorderedList } from './styles.js'
import TodoItem from './TodoItem/TodoItem.jsx'

export const TodoList = observer(() => {
	const { todos } = store.business
	if (!todos.length) {
		return <h2>You don`t have tasks for now</h2>
	}
	return (
		<UnorderedList>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</UnorderedList>
	)
})
